const providers = {
  openai: {
    name: 'OpenAI', icon: 'sparkles', color: 'Provider API', models: [
      { name: 'GPT-4.1', params: 200, context: 1000, input: 2.00, output: 8.00, vram: 512, ram: 768, compute: 'hosted frontier reasoning' },
      { name: 'GPT-4.1 mini', params: 40, context: 1000, input: 0.40, output: 1.60, vram: 96, ram: 160, compute: 'hosted low-latency general use' },
      { name: 'GPT-4o mini', params: 8, context: 128, input: 0.15, output: 0.60, vram: 24, ram: 48, compute: 'hosted budget multimodal' }
    ]
  },
  anthropic: {
    name: 'Anthropic', icon: 'shield', color: 'Provider API', models: [
      { name: 'Claude Sonnet 4', params: 200, context: 200, input: 3.00, output: 15.00, vram: 640, ram: 960, compute: 'hosted coding and agentic work' },
      { name: 'Claude 3.5 Haiku', params: 20, context: 200, input: 0.80, output: 4.00, vram: 64, ram: 96, compute: 'hosted fast assistant tier' },
      { name: 'Claude Opus 4', params: 400, context: 200, input: 15.00, output: 75.00, vram: 1200, ram: 1800, compute: 'hosted premium reasoning' }
    ]
  },
  qwen: {
    name: 'Qwen', icon: 'bot', color: 'Open weight/API', models: [
      { name: 'Qwen2.5 72B Instruct', params: 72, context: 128, input: 0.35, output: 0.40, vram: 86, ram: 140, compute: '1×H100 or 2×L40S at INT4' },
      { name: 'Qwen2.5 Coder 32B', params: 32, context: 128, input: 0.18, output: 0.18, vram: 42, ram: 72, compute: 'single L40S/A100 at INT4' },
      { name: 'Qwen3 235B A22B', params: 235, context: 128, input: 0.60, output: 1.80, vram: 300, ram: 460, compute: 'MoE multi-GPU serving' }
    ]
  },
  google: {
    name: 'Google', icon: 'gem', color: 'Provider API', models: [
      { name: 'Gemini 2.5 Pro', params: 300, context: 1000, input: 1.25, output: 10.00, vram: 900, ram: 1300, compute: 'hosted long-context reasoning' },
      { name: 'Gemini 2.5 Flash', params: 60, context: 1000, input: 0.30, output: 2.50, vram: 180, ram: 280, compute: 'hosted fast multimodal' },
      { name: 'Gemma 2 27B', params: 27, context: 8, input: 0.15, output: 0.15, vram: 36, ram: 64, compute: 'single prosumer/server GPU at INT4' }
    ]
  },
  deepseek: {
    name: 'DeepSeek', icon: 'workflow', color: 'Open weight/API', models: [
      { name: 'DeepSeek R1', params: 671, context: 128, input: 0.55, output: 2.19, vram: 720, ram: 1100, compute: 'MoE 8×H100 class' },
      { name: 'DeepSeek V3', params: 671, context: 128, input: 0.27, output: 1.10, vram: 690, ram: 1050, compute: 'MoE 8×H100 class' },
      { name: 'DeepSeek R1 Distill Qwen 14B', params: 14, context: 64, input: 0.10, output: 0.10, vram: 18, ram: 32, compute: 'single 24GB GPU at INT4' }
    ]
  },
  meta: {
    name: 'Meta', icon: 'layers', color: 'Open weight', models: [
      { name: 'Llama 3.3 70B', params: 70, context: 128, input: 0.35, output: 0.40, vram: 84, ram: 136, compute: '1×H100 or 2×L40S at INT4' },
      { name: 'Llama 4 Scout', params: 109, context: 10000, input: 0.18, output: 0.59, vram: 140, ram: 220, compute: 'MoE long-context serving' },
      { name: 'Llama 4 Maverick', params: 400, context: 1000, input: 0.27, output: 0.85, vram: 480, ram: 760, compute: 'MoE multi-GPU serving' }
    ]
  },
  mistral: {
    name: 'Mistral', icon: 'wind', color: 'Open weight/API', models: [
      { name: 'Mistral Large', params: 123, context: 128, input: 2.00, output: 6.00, vram: 160, ram: 250, compute: 'hosted or multi-GPU private' },
      { name: 'Mixtral 8x22B', params: 141, context: 64, input: 0.90, output: 0.90, vram: 175, ram: 270, compute: 'MoE 4×A100 class' },
      { name: 'Codestral 22B', params: 22, context: 32, input: 0.30, output: 0.30, vram: 30, ram: 52, compute: 'single L40S for code' }
    ]
  },
  xai: {
    name: 'xAI', icon: 'orbit', color: 'Provider API', models: [
      { name: 'Grok 3', params: 300, context: 128, input: 3.00, output: 15.00, vram: 900, ram: 1300, compute: 'hosted premium reasoning' },
      { name: 'Grok 3 Mini', params: 32, context: 128, input: 0.30, output: 0.50, vram: 48, ram: 80, compute: 'hosted compact reasoning' },
      { name: 'Grok 4', params: 400, context: 256, input: 3.00, output: 15.00, vram: 1200, ram: 1800, compute: 'hosted frontier reasoning' }
    ]
  },
  cohere: {
    name: 'Cohere', icon: 'boxes', color: 'Provider API', models: [
      { name: 'Command R+', params: 104, context: 128, input: 2.50, output: 10.00, vram: 132, ram: 210, compute: 'hosted RAG and tool use' },
      { name: 'Command R', params: 35, context: 128, input: 0.15, output: 0.60, vram: 46, ram: 76, compute: 'hosted enterprise RAG' },
      { name: 'Aya Expanse 32B', params: 32, context: 8, input: 0.50, output: 1.50, vram: 42, ram: 72, compute: 'multilingual serving tier' }
    ]
  }
};

const $ = (id) => document.getElementById(id);
const money = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 });
const number = new Intl.NumberFormat('en-US', { maximumFractionDigits: 1 });

function selectedProvider() { return providers[$('providerSelect').value]; }
function selectedModel() { return selectedProvider().models[$('modelSelect').value]; }
function sparkUnits(model) { return Math.max(1, Math.ceil(model.vram / 128)); }
function blendedPrice(model) { return (model.input * 0.45) + (model.output * 0.55); }
function privateCost(model) {
  const sparkMonthly = sparkUnits(model) * 420;
  const baselineMillionTokens = 100;
  return (sparkMonthly / baselineMillionTokens) + Math.max(0.05, model.params / 900);
}
function margin(model) {
  const revenue = blendedPrice(model);
  const cost = privateCost(model);
  return Math.round(((revenue - cost) / revenue) * 100);
}

function renderProviders() {
  $('providerSelect').innerHTML = Object.entries(providers)
    .map(([key, provider]) => `<option value="${key}">${provider.name}</option>`).join('');
}
function renderModels() {
  const provider = selectedProvider();
  $('modelSelect').innerHTML = provider.models
    .map((model, index) => `<option value="${index}">${model.name}</option>`).join('');
}
function renderCards() {
  const provider = selectedProvider();
  const model = selectedModel();
  const profit = blendedPrice(model) - privateCost(model);
  $('providerName').textContent = provider.name;
  $('providerType').textContent = provider.color;
  $('heroModel').textContent = model.name;
  $('heroHint').textContent = `${number.format(model.params)}B params · ${number.format(model.context)}K context · ${model.compute}`;
  $('paramsOut').textContent = `${number.format(model.params)}B`;
  $('contextOut').textContent = `${number.format(model.context)}K`;
  $('vramOut').textContent = `${number.format(model.vram)} GB`;
  $('ramOut').textContent = `${number.format(model.ram)} GB`;
  $('sparkOut').textContent = `${sparkUnits(model)} unit${sparkUnits(model) > 1 ? 's' : ''}`;
  $('inputOut').textContent = `${money.format(model.input)} / M`;
  $('outputOut').textContent = `${money.format(model.output)} / M`;
  $('blendedOut').textContent = `${money.format(blendedPrice(model))} / M`;
  $('privateOut').textContent = `${money.format(privateCost(model))} / M`;
  $('profitOut').textContent = `${money.format(profit)} / M`;
  $('marginOut').textContent = `${margin(model)}%`;
  renderTable(provider);
  if (window.lucide) window.lucide.createIcons();
}
function renderTable(provider) {
  $('modelTable').innerHTML = provider.models.map((model, index) => `
    <tr>
      <td><button class="model-button" data-index="${index}">${model.name}</button></td>
      <td>${number.format(model.params)}B</td>
      <td>${number.format(model.context)}K</td>
      <td>${money.format(model.input)} / ${money.format(model.output)}</td>
      <td>${number.format(model.vram)} GB</td>
      <td>${sparkUnits(model)}</td>
    </tr>`).join('');
  document.querySelectorAll('.model-button').forEach((button) => button.addEventListener('click', () => {
    $('modelSelect').value = button.dataset.index;
    renderCards();
  }));
}
function boot() {
  renderProviders();
  $('providerSelect').value = 'anthropic';
  renderModels();
  $('modelSelect').value = '0';
  $('providerSelect').addEventListener('change', () => { renderModels(); renderCards(); });
  $('modelSelect').addEventListener('change', renderCards);
  renderCards();
}
window.addEventListener('DOMContentLoaded', boot);
