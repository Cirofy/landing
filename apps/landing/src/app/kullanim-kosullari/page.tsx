import type { Metadata } from "next";
import { SiteHeader } from "../../components/site-header";

export const metadata: Metadata = {
  title: "Kullanım koşulları — Cirofy",
  description: "Cirofy hizmet kullanım koşulları özeti.",
};

export default function TermsPage() {
  return (
    <main className="page">
      <div className="shell" style={{ paddingTop: 24 }}>
        <SiteHeader />
      </div>
      <article className="section">
        <div className="shell legal-doc">
          <h1>Kullanım koşulları</h1>
          <p className="legal-updated">Son güncelleme: 21 Eylül 2026</p>
          <p>
            Cirofy’yi kullanarak bu koşulları kabul etmiş sayılırsınız. Hizmet,
            pazaryeri satıcılarına net kâr ve operasyon görünürlüğü sunar.
          </p>
          <h2>Hesap</h2>
          <ul>
            <li>Doğru iletişim bilgisi vermek sizin sorumluluğunuzdadır.</li>
            <li>Şifrenizi gizli tutun; hesabınızdaki işlemlerden siz sorumlusunuz.</li>
            <li>Deneme ve ücretli planlar kota ve özellik sınırlarına tabidir.</li>
          </ul>
          <h2>Mağaza bağlantısı</h2>
          <p>
            Pazaryeri erişim bilgilerini yalnızca kendi mağazanız için
            bağlayabilirsiniz. Yetkisiz erişim yasaktır. Senkron sonucu
            bağlanan pazaryeri verisine bağlıdır.
          </p>
          <h2>Hesaplamalar</h2>
          <p>
            Net kâr ve hakediş tahminleri tanımlı maliyetler ile bağlanan
            verilere dayanır. Nihai mali/vergi sonuçları için kendi
            kayıtlarınızı esas alın.
          </p>
          <h2>İptal ve destek</h2>
          <p>
            Abonelik ve iptal hesap ayarlarından yönetilir. Sorular için{" "}
            <a href="mailto:destek@cirofy.com">destek@cirofy.com</a>.
          </p>
        </div>
      </article>
    </main>
  );
}
