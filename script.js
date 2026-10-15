// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Brew data for interactive tabs
const menuData = {
  espresso: {
    name: "Espresso",
    desc: "Ekstraksi pekat dan kaya crema menggunakan rasio 1:2 dalam waktu 27 detik. Memberikan tendangan rasa yang kuat di awal dengan aftertaste manis.",
    price: "Rp 25.000",
    specs: [
      { label: "Dosis kopi", val: "18 gram" },
      { label: "Hasil seduh", val: "36 gram" },
      { label: "Suhu air", val: "92°C" },
      { label: "Waktu ekstraksi", val: "27 detik" }
    ]
  },
  v60: {
    name: "V60 Manual Brew",
    desc: "Metode seduh tuang manual menggunakan kertas filter. Menghasilkan secangkir kopi yang bersih (clean cup) dengan menonjolkan catatan rasa buah dan bunga.",
    price: "Rp 32.000",
    specs: [
      { label: "Dosis kopi", val: "15 gram" },
      { label: "Ukuran gilingan", val: "Sedang (Medium)" },
      { label: "Air seduh", val: "225 ml (90°C)" },
      { label: "Waktu tuang", val: "2 menit 30 detik" }
    ]
  },
  tubruk: {
    name: "Kopi Tubruk Tradisional",
    desc: "Cara seduh klasik Nusantara tanpa filter. Bubuk kopi diseduh langsung di dalam cangkir, memunculkan body yang tebal dan kaya cita rasa autentik.",
    price: "Rp 20.000",
    specs: [
      { label: "Dosis kopi", val: "15 gram" },
      { label: "Ukuran gilingan", val: "Kasar (Coarse)" },
      { label: "Suhu air", val: "95°C" },
      { label: "Waktu seduh", val: "3 menit" }
    ]
  },
  susu: {
    name: "Kopi Susu Aren",
    desc: "Perpaduan espresso house blend dengan susu segar pilihan dan manisnya gula aren murni. Lembut, creamy, dan pas untuk menemani sore hari.",
    price: "Rp 30.000",
    specs: [
      { label: "Espresso", val: "Double shot" },
      { label: "Susu segar", val: "150 ml" },
      { label: "Gula aren", val: "15 ml murni" },
      { label: "Penyajian", val: "Es / Panas" }
    ]
  }
};

const tabs = document.querySelectorAll('.tab-btn');
const bName = document.getElementById('b-name');
const bDesc = document.getElementById('b-desc');
const bPrice = document.getElementById('b-price');
const bSpecs = document.getElementById('b-specs');

function updateTab(key) {
  const data = menuData[key];
  if (!data) return;
  bName.textContent = data.name;
  bDesc.textContent = data.desc;
  bPrice.textContent = data.price;

  bSpecs.innerHTML = data.specs.map(s => `
    <div class="flex justify-between py-1 border-b border-coffee-100">
      <dt class="text-coffee-600">${s.label}</dt>
      <dd class="font-mono font-medium text-coffee-900">${s.val}</dd>
    </div>
  `).join('');
}

// Initialize default tab
updateTab('espresso');

tabs.forEach(btn => {
  btn.addEventListener('click', () => {
    tabs.forEach(t => {
      t.setAttribute('aria-selected', 'false');
      t.className = "tab-btn px-6 py-3 rounded-full text-sm font-semibold transition bg-white text-coffee-800 border border-coffee-200 hover:bg-coffee-100";
    });
    btn.setAttribute('aria-selected', 'true');
    btn.className = "tab-btn px-6 py-3 rounded-full text-sm font-semibold transition bg-coffee-900 text-white shadow";

    const k = btn.getAttribute('data-k');
    updateTab(k);
  });
});

// Form submission simulation
const orderForm = document.getElementById('order');
const toast = document.getElementById('toast');
const toastMsg = document.getElementById('toast-msg');

orderForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const namaInput = document.getElementById('nama');
  const namaVal = namaInput.value.trim() || 'Pelanggan';

  toastMsg.textContent = `Terima kasih ${namaVal}! Pesanan biji kopi kamu telah dicatat.`;
  toast.classList.remove('translate-y-20', 'opacity-0');

  setTimeout(() => {
    toast.classList.add('translate-y-20', 'opacity-0');
  }, 4000);

  orderForm.reset();
});
