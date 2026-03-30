import PageHeader from '../../components/ui/pageheader/PageHeader';
import CardTabelV1, { type CardTabelItem } from '../../components/ui/cardtabelv1/CardTabelV1';

const sampleItems: CardTabelItem[] = [
  { label: 'Nama User', value: 'Rudi Setyawan' },
  { label: 'Unit', value: 'D1-17' },
  { label: 'Status', variant: 'badge', status: 'Pemberkasan' },
  { label: 'Sales', value: 'Fajar Pratama' },
  { label: 'Super Visor', value: 'Dina Maharani' },
  { label: 'Sales Manager', value: 'Raka Putra' },
  { label: 'Tgl Booking', value: '19/09/2024' },
  { label: 'Jenis Akad', value: 'KPR' },
  { label: 'Kreditur / Bank', value: 'Bank BTN' },
  { label: 'Target SPR Dan PPJB', value: '22/09/2024' },
  { label: 'Target Pemberkasan', value: '03/10/2024' },
  {
    label: 'Progres Berkas',
    variant: 'progress',
    progress: { completed: 7, total: 10, percent: 70 },
    helperText: 'Akumulasi dokumen yang sudah lengkap.',
  },
];

const CardTabelV1Page = () => {
  return (
    <section className="space-y-4">
      <PageHeader
        title="Card Tabel V1"
        subtitle="Kartu data readonly dengan pola 4 kolom, badge status, dan progress bar seperti detail user."
      />

      <CardTabelV1
        title="Detail User"
        subtitle="Contoh implementasi kartu data untuk detail penjualan atau data master."
        items={sampleItems}
      />
    </section>
  );
};

export default CardTabelV1Page;
