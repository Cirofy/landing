import { plans } from "@cirofy/shared";
import { SiteHeader } from "../components/site-header";

const webUrl = process.env.NEXT_PUBLIC_WEB_URL ?? "http://localhost:3001";

const problems = [
  {
    title: "Brüt satış yanıltır",
    body: "Panelde ciro yükselirken komisyon, kargo, hizmet bedeli ve stopaj cebinizden iner. Brüt rakam günlük karar için yeterli değildir.",
  },
  {
    title: "Excel gecikir",
    body: "Maliyet satırları, desi farkları ve kampanya indirimleri tabloya geç yazılır. Zarar eden teklif çoğu zaman gönderildikten sonra fark edilir.",
  },
  {
    title: "Hakediş şeffaf değildir",
    body: "Beklenen tutar ile yatan tutar uyuşmayınca satırlar arasında kaybolursunuz. Fazla kesilen fark haftalarca görünmez kalabilir.",
  },
];

const steps = [
  {
    n: "01",
    title: "Mağazayı bağlayın",
    body: "Pazaryeri hesabınızı güvenli şekilde bağlayın. Sipariş ve ürün verileri panelde toplanır.",
  },
  {
    n: "02",
    title: "Maliyetleri tamamlayın",
    body: "Ürün maliyetlerini girin veya güncelleyin. Net kâr hesabı maliyet olmadan yarım kalır.",
  },
  {
    n: "03",
    title: "Net kârı izleyin",
    body: "Sipariş ve ürün bazında komisyon, kargo, hizmet, KDV ve stopaj düşülmüş cebinize kalanı görün.",
  },
  {
    n: "04",
    title: "Fark ve kampanyayı yönetin",
    body: "Hakediş sapmalarını işaretleyin; hedef marjın altındaki teklifleri kampanya öncesi eleyin.",
  },
];

const featureBlocks = [
  {
    id: "net-kar",
    title: "Sipariş ve ürün net kârı",
    lead: "Her satırın cebinize kalanını görün.",
    points: [
      "Brüt satıştan komisyon, kargo, hizmet bedeli, KDV net ve stopaj düşülür",
      "Ürün maliyetiyle birleşince gerçek net kâr ve marj oluşur",
      "Sipariş detayında kesinti dökümü; özet ekranda günlük / haftalık trend",
      "Pozitif ve negatif kâr aynı dilde: işaret + etiket, yalnız renk değil",
    ],
  },
  {
    id: "hakedis",
    title: "Hakediş ve desi kontrolü",
    lead: "Beklenen ile ödenen arasındaki farkı yakalayın.",
    points: [
      "Dönem bazlı beklenen hakediş ile gerçekleşen tutarı karşılaştırın",
      "Sapma satırlarını listeleyin; inceleme için önceliklendirin",
      "Desi / kargo kesintisi şüpheli siparişleri ayırın",
      "Rakamlar yalnızca bağlanan mağaza ve tanımlı maliyetlere dayanır",
    ],
  },
  {
    id: "kampanya",
    title: "Kampanya öncesi kârlılık filtresi",
    lead: "Zarar eden teklifi göndermeden önce eleyin.",
    points: [
      "Hedef marjı tanımlayın; altındaki SKU’lar listelenir",
      "Flaş / indirim senaryosunda net kârı önizleyin",
      "Kalan teklifleri güvenle ilerletin",
      "Manuel tabloyu bırakın; filtre operasyon ritmine oturur",
    ],
  },
  {
    id: "uyari",
    title: "Uyarılar ve günlük operasyon",
    lead: "Aksiyon gerektiren maddeler panoya düşer.",
    points: [
      "Kritik marj, hakediş farkı ve senkron durumu bildirimlerde",
      "Mobilde alt sekmelerle özet, sipariş, ürün ve hakedişe hızlı geçiş",
      "Abonelik kullanım bandı: sipariş kotası görünür",
      "Çoklu mağaza bağlantısı için hazır form dili (genişleme fazı)",
    ],
  },
];

const audiences = [
  {
    title: "Pazaryeri satıcıları",
    body: "Trendyol ağırlıklı veya çok kanallı satıcılar: günlük net kârı, sipariş kârlılığını ve hakediş farkını tek yerden takip eder.",
  },
  {
    title: "Marka / e-ticaret ekipleri",
    body: "Operasyon ve finans aynı rakamı konuşur. Kampanya öncesi marj filtresi ekip içi tartışmayı kısaltır.",
  },
  {
    title: "Ajanslar (sonraki faz)",
    body: "Çoklu mağaza yönetimi yol haritasında. Bugünden tek mağaza doğruluğu önceliklidir.",
  },
];

const faqs = [
  {
    q: "Cirofy neyi hesaplar?",
    a: "Sipariş ve ürün bazında brüt satıştan pazaryeri kesintilerini ve ürün maliyetini düşerek net kâr ve marj üretir. Amaç cebinize kalanı göstermektir.",
  },
  {
    q: "Excel’den farkı nedir?",
    a: "Manuel satır güncellemesi yerine bağlanan mağaza verisi ve tanımlı maliyetlerle tekrarlayan hesabı otomatikleştirir. Kampanya ve hakediş için ayrı kontrol yüzeyleri vardır.",
  },
  {
    q: "Hakediş farkı nasıl görünür?",
    a: "Beklenen tutar ile gerçekleşen tutar dönem bazında karşılaştırılır. Sapma satırları listelenir; inceleme için öncelik verilir.",
  },
  {
    q: "Hangi paket bana uygun?",
    a: "Aylık sipariş bandınıza göre Starter, Business veya Enterprise seçin. Ürün limiti pakete dahildir; yıllık ödemede birim fiyat düşer.",
  },
  {
    q: "Verilerim güvende mi?",
    a: "Bağlantı bilgileri ve hesap verileri korumalı işlenir. Ürün yüzeyinde altyapı veya sağlayıcı ifşası yapılmaz; güvenli ödeme ve erişim kontrolleri kullanılır.",
  },
  {
    q: "Hangi veri gösterilir?",
    a: "Özet ve listeler yalnızca bağladığınız mağaza ve girdiğiniz maliyetlere dayanır. Bağlantı yoksa boş durum gösterilir; canlı senkron sonrası gerçek hesap verisi gelir.",
  },
];

const planFeatures: Record<string, string[]> = {
  starter: [
    "Sipariş / ürün net kârı",
    "Temel hakediş görünümü",
    "Kampanya marj filtresi",
    "E-posta destek",
  ],
  business: [
    "Starter’daki her şey",
    "Gelişmiş hakediş sapma listesi",
    "Uyarılar ve bildirimler",
    "Öncelikli destek",
  ],
  enterprise: [
    "Business’taki her şey",
    "Yüksek sipariş bandı",
    "Özel onboarding",
    "Operasyon odaklı destek",
  ],
};

export default function HomePage() {
  return (
    <main className="page">
      <section className="hero-bleed">
        <div className="hero-bleed-bg" aria-hidden>
          <div className="hero-bleed-grid" />
          <div className="hero-bleed-bars">
            <i style={{ height: "36%" }} />
            <i style={{ height: "52%" }} />
            <i style={{ height: "44%" }} />
            <i style={{ height: "68%" }} />
            <i style={{ height: "78%" }} />
            <i style={{ height: "92%" }} />
            <i style={{ height: "61%" }} />
          </div>
        </div>

        <div className="shell hero-shell">
          <SiteHeader />
          <div className="hero-copy">
            <h1>Satış var. Kâr da var mı?</h1>
            <p>
              Komisyon, kargo ve tüm kesintiler düşülmüş gerçek net kârı görün.
            </p>
            <div className="cta-row">
              <a className="btn btn-profit btn-lg" href={`${webUrl}/register`}>
                Ücretsiz dene
              </a>
              <a className="btn btn-ghost btn-lg" href="#how">
                Nasıl çalışır
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section band" id="problem">
        <div className="shell">
          <h2>Ciro yükseliyor, kâr belirsiz kalıyor</h2>
          <p className="section-lead">
            Pazaryeri satıcısı her gün brüt rakamla karar vermeye zorlanır. Cirofy
            cebinize kalanı öne çıkarır.
          </p>
          <div className="card-grid three">
            {problems.map((item) => (
              <article key={item.title} className="info-card">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="how">
        <div className="shell">
          <h2>Dört adımda net kâr paneli</h2>
          <p className="section-lead">
            Bağlayın, maliyetleri tamamlayın, izleyin, filtreleyin. Operasyon diliyle
            yazılmış kısa bir kurulum.
          </p>
          <ol className="step-list">
            {steps.map((step) => (
              <li key={step.n}>
                <span className="step-n">{step.n}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="preview-band" aria-label="Panel önizleme">
        <div className="shell">
          <div className="preview-copy">
            <h2>Satıcının günlük para paneli</h2>
            <p>
              Özet, sipariş kârlılığı, ürün marjı, hakediş ve abonelik — aynı ink +
              teal dilinde. Şov değil; hesaplı operasyon yüzeyi.
            </p>
          </div>
          <div className="preview-panel" aria-hidden>
            <div className="preview-top">
              <span>Bugünün kârı</span>
              <strong>+₺4.280</strong>
            </div>
            <div className="preview-metrics">
              <div>
                <small>Net marj</small>
                <b>%19,1</b>
              </div>
              <div>
                <small>Sipariş</small>
                <b>86</b>
              </div>
              <div>
                <small>Uyarı</small>
                <b className="warn">3</b>
              </div>
            </div>
            <div className="preview-bars">
              <i style={{ height: "40%" }} />
              <i style={{ height: "55%" }} />
              <i style={{ height: "48%" }} />
              <i style={{ height: "70%" }} />
              <i style={{ height: "62%" }} />
              <i style={{ height: "88%" }} />
              <i style={{ height: "74%" }} />
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="features">
        <div className="shell">
          <h2>Ürün derinliği</h2>
          <p className="section-lead">
            Net kâr, hakediş, kampanya öncesi filtre ve operasyon derinliği tek
            dilde. Önce doğruluk; sonra fiyat motoru, reklam ve pazar zekâsı.
          </p>
          <div className="feature-deep">
            {featureBlocks.map((block) => (
              <article key={block.id} id={block.id} className="feature-block">
                <div className="feature-block-head">
                  <h3>{block.title}</h3>
                  <p>{block.lead}</p>
                </div>
                <ul>
                  {block.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section band" id="audience">
        <div className="shell">
          <h2>Kimler için</h2>
          <p className="section-lead">
            Türk e-ticaret operasyonuna yakın; abartısız, somut dil.
          </p>
          <div className="card-grid three">
            {audiences.map((item) => (
              <article key={item.title} className="info-card">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="pricing">
        <div className="shell">
          <h2>Şeffaf paketler</h2>
          <p className="section-lead">
            Sipariş hacmine ve ürün limitine göre ölçeklenir. Yıllık ödemede birim
            fiyat düşer. Fiyatlara KDV dahil değildir.
          </p>
          <div className="pricing">
            {plans.map((plan, i) => (
              <article
                key={plan.id}
                className={`price-card${i === 1 ? " featured" : ""}`}
              >
                {i === 1 ? <div className="price-badge">En çok tercih</div> : null}
                <div className="price-name">{plan.name}</div>
                <div className="price">₺{plan.priceMonthlyTry.toLocaleString("tr-TR")}</div>
                <div className="price-meta">/ ay · {plan.monthlyOrders} sipariş</div>
                <div className="price-meta">
                  Yıllık ₺{plan.priceYearlyTry.toLocaleString("tr-TR")} / ay eşdeğeri
                </div>
                <div className="price-meta">
                  {plan.productLimit.toLocaleString("tr-TR")} ürün limiti
                </div>
                <ul className="price-features">
                  {(planFeatures[plan.id] ?? []).map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <a
                  className={i === 1 ? "btn btn-profit" : "btn btn-ghost"}
                  href={`${webUrl}/register`}
                >
                  {i === 2 ? "İletişime geç" : "Başla"}
                </a>
              </article>
            ))}
          </div>
          <p className="pricing-footnote">
            Kota aşımında plan yükseltme önerilir. Faturalama ve iptal koşulları hesap
            ayarlarından yönetilir.
          </p>
        </div>
      </section>

      <section className="section band" id="faq">
        <div className="shell">
          <h2>Sık sorulanlar</h2>
          <p className="section-lead">
            Satış değil, cebinize kalan kâr — karar vermeden önce net cevaplar.
          </p>
          <div className="faq-list">
            {faqs.map((item) => (
              <details key={item.q} className="faq-item">
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="shell final-cta-inner">
          <div>
            <h2>Pazaryeri kârlılığını kontrol altına alın</h2>
            <p>
              Mağazayı bağlayın, maliyetleri girin, net kârı ve hakediş farkını aynı
              panelde izleyin.
            </p>
          </div>
          <div className="cta-row">
            <a className="btn btn-profit btn-lg" href={`${webUrl}/register`}>
              Ücretsiz dene
            </a>
            <a className="btn btn-ghost btn-lg" href={`${webUrl}/login`}>
              Panele bak
            </a>
          </div>
        </div>
      </section>

      <footer className="footer-rich">
        <div className="shell footer-grid">
          <div className="footer-brand-block">
            <div className="footer-brand">
              <img src="/logo.png" alt="" width={22} height={22} />
              <span>Cirofy</span>
            </div>
            <p>Pazaryeri kârlılığını kontrol altına alın.</p>
          </div>
          <div>
            <h3>Ürün</h3>
            <a href="#features">Özellikler</a>
            <a href="#how">Nasıl çalışır</a>
            <a href="#pricing">Fiyatlar</a>
            <a href="#faq">SSS</a>
          </div>
          <div>
            <h3>Hesap</h3>
            <a href={`${webUrl}/register`}>Kayıt ol</a>
            <a href={`${webUrl}/login`}>Giriş</a>
            <a href="#pricing">Paketler</a>
          </div>
          <div>
            <h3>Yasal</h3>
            <a href="/gizlilik">Gizlilik</a>
            <a href="/kullanim-kosullari">Kullanım koşulları</a>
            <a href="/kvkk">KVKK</a>
            <a href="mailto:destek@cirofy.com">destek@cirofy.com</a>
          </div>
        </div>
        <div className="shell footer-bottom">
          <span>© {new Date().getFullYear()} Cirofy</span>
          <span>Satış değil, cebinize kalan kâr.</span>
        </div>
      </footer>
    </main>
  );
}
