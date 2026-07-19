const models = [
  ['Llama 3.1 8B',8,'~55 tok/s on L4/A10G',0.18],['Gemma 2 9B',9,'~50 tok/s on L4/A10G',0.20],['Mistral Nemo 12B',12,'~42 tok/s on L40S',0.22],['Qwen2.5 14B',14,'~38 tok/s on L40S',0.24],['Phi-4 14B',14,'~40 tok/s on L40S',0.28],['DeepSeek R1 Distill 14B',14,'~36 tok/s on L40S',0.35],['Llama 3.3 70B',70,'~18 tok/s on 2×A100',0.88],['Qwen2.5 72B',72,'~17 tok/s on 2×A100',0.90],['Mixtral 8x7B',47,'~24 tok/s on A100',0.70],['Mixtral 8x22B',141,'~11 tok/s on 4×A100',1.20],['Command R+',104,'~13 tok/s on 4×A100',1.35],['DBRX Instruct',132,'~10 tok/s on 4×A100',1.40],['Yi Large',34,'~28 tok/s on A100',0.55],['Jamba 1.5 Mini',12,'~45 tok/s on L40S',0.25],['Jamba 1.5 Large',94,'~14 tok/s on 4×A100',1.15],['Qwen2.5 Coder 32B',32,'~30 tok/s on A100',0.45],['Codestral 22B',22,'~34 tok/s on L40S/A100',0.30],['StarCoder2 15B',15,'~37 tok/s on L40S',0.20],['DeepSeek Coder V2 Lite',16,'~35 tok/s on L40S',0.28],['DeepSeek V3',671,'MoE, ~28 tok/s on 8×H100',1.25],['DeepSeek R1',671,'MoE, ~20 tok/s on 8×H100',2.20],['Kimi K2',1000,'MoE, cluster grade',2.50],['Llama 4 Scout',109,'MoE, ~30 tok/s on H100',0.75],['Llama 4 Maverick',400,'MoE, ~22 tok/s on 8×H100',1.80],['Grok 3 Mini',32,'API reference class',0.35],['Claude 3.5 Haiku',20,'API reference class',0.80],['Claude Sonnet 4',200,'API reference class',3.00],['GPT-4o mini',8,'API reference class',0.15],['GPT-4.1',200,'API reference class',2.00],['Gemini 2.5 Pro',300,'API reference class',2.50]
].map(([name, params, compute, price]) => ({ name, params, compute, price }));

const $ = (id) => document.getElementById(id);
const fmt = new Intl.NumberFormat('en-US', { maximumFractionDigits: 1 });
const money = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 });
const bigMoney = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

function requiredVram(model, bytes, context) {
  const weights = model.params * bytes;
  const kv = Math.max(1.2, model.params * 0.006 * (context / 1024));
  return (weights + kv) * 1.18;
}
function modelThroughput(model, vram) {
  const base = 92 / Math.sqrt(Math.max(model.params, 4));
  const penalty = Math.max(1, vram / 96);
  return Math.max(1.8, base / penalty);
}
function calculate() {
  const model = models[$('modelSelect').value];
  const bytes = Number($('quantSelect').value);
  const context = Number($('contextInput').value);
  const monthlyTokens = Number($('volumeInput').value);
  const util = Number($('utilInput').value) / 100;
  const gpuHour = Number($('gpuCostInput').value);
  const sparkMonth = Number($('sparkCostInput').value);
  const vram = requiredVram(model, bytes, context);
  const ram = Math.max(16, vram * 1.55);
  const sparks = Math.max(1, Math.ceil(vram / 128));
  const throughput = modelThroughput(model, vram) * sparks * util;
  const hoursPerM = 1_000_000 / (throughput * 3600);
  const computeCostM = hoursPerM * gpuHour + (sparkMonth * sparks / Math.max(monthlyTokens / 1_000_000, 1));
  const revenue = model.price * monthlyTokens / 1_000_000;
  const expense = computeCostM * monthlyTokens / 1_000_000;
  const profit = revenue - expense;
  const margin = revenue > 0 ? Math.max(0, Math.min(100, (profit / revenue) * 100)) : 0;

  $('heroModel').textContent = model.name;
  $('heroHint').textContent = `${fmt.format(model.params)}B params · ${model.compute}`;
  $('vramOut').textContent = `${fmt.format(vram)} GB`;
  $('ramOut').textContent = `${fmt.format(ram)} GB`;
  $('sparkOut').textContent = `${sparks} unit${sparks > 1 ? 's' : ''}`;
  $('costOut').textContent = money.format(computeCostM);
  $('profitOut').textContent = bigMoney.format(profit);
  $('priceOut').textContent = `${money.format(model.price)} / M`;
  $('marginBar').style.width = `${margin}%`;
  $('marginText').textContent = `${fmt.format(margin)}% gross margin at ${fmt.format(monthlyTokens / 1_000_000)}M tokens/month; estimated expense ${bigMoney.format(expense)} vs revenue ${bigMoney.format(revenue)}.`;
  renderTable(vram);
}
function renderTable(selectedVram = 0) {
  $('modelTable').innerHTML = models.map((m, i) => {
    const fit = requiredVram(m, Number($('quantSelect').value || 0.5), Number($('contextInput').value || 8192)) <= 128;
    return `<tr><td>${m.name}</td><td>${fmt.format(m.params)}B</td><td>${m.compute}</td><td>${money.format(m.price)}</td><td><button class="fit ${fit ? 'ok' : 'no'}" data-index="${i}">${fit ? '1 Spark' : 'multi Spark'}</button></td></tr>`;
  }).join('');
  document.querySelectorAll('.fit').forEach((button) => button.addEventListener('click', () => {
    $('modelSelect').value = button.dataset.index;
    calculate();
    scrollTo({ top: 0, behavior: 'smooth' });
  }));
}
function boot() {
  $('modelSelect').innerHTML = models.map((m, i) => `<option value="${i}">${m.name} · ${m.params}B</option>`).join('');
  $('modelSelect').value = '20';
  document.querySelectorAll('input, select').forEach((el) => el.addEventListener('input', calculate));
  calculate();
  if (window.lucide) window.lucide.createIcons();
}
window.addEventListener('DOMContentLoaded', boot);
