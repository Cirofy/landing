import type { Metadata } from "next";
import { SiteHeader } from "../../components/site-header";

export const metadata: Metadata = {
  title: "KVKK aydınlatma — Cirofy",
  description: "Cirofy KVKK aydınlatma metni özeti.",
};

export default function KvkkPage() {
  return (
    <main className="page">
      <div className="shell" style={{ paddingTop: 24 }}>
        <SiteHeader />
      </div>
      <article className="section">
        <div className="shell legal-doc">
          <h1>KVKK aydınlatma metni</h1>
          <p className="legal-updated">Son güncelleme: 21 Eylül 2026</p>
          <p>
            6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında, Cirofy
            hizmetini sunarken işlenen kişisel verilere ilişkin özet bilgilendirme
            aşağıdadır.
          </p>
          <h2>Veri sorumlusu</h2>
          <p>
            Cirofy — iletişim:{" "}
            <a href="mailto:destek@cirofy.com">destek@cirofy.com</a>
          </p>
          <h2>İşlenen veriler</h2>
          <ul>
            <li>Kimlik / iletişim: ad soyad, e-posta</li>
            <li>Müşteri işlem: organizasyon, mağaza bağlantı bilgileri</li>
            <li>İşlem güvenliği: oturum ve erişim kayıtları</li>
          </ul>
          <h2>Hukuki sebepler</h2>
          <p>
            Sözleşmenin kurulması ve ifası, meşru menfaat (güvenlik, hizmet
            iyileştirme) ve gerektiğinde açık rıza.
          </p>
          <h2>Aktarım</h2>
          <p>
            Hizmetin sunulması için zorunlu iş ortaklarına (barındırma, e-posta
            iletimi, güvenli ödeme) aktarım yapılabilir. Ürün arayüzünde sağlayıcı
            adı ifşa edilmez.
          </p>
          <h2>Haklarınız</h2>
          <p>
            Kanun’un 11. maddesi kapsamındaki haklarınızı{" "}
            <a href="mailto:destek@cirofy.com">destek@cirofy.com</a> üzerinden
            kullanabilirsiniz. Gizlilik özeti: <a href="/gizlilik">/gizlilik</a>
          </p>
        </div>
      </article>
    </main>
  );
}
