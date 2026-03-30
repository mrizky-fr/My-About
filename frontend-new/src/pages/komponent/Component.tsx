import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { Plus, Pencil, Trash2 } from 'lucide-react';
import PageHeader from '../../components/ui/pageheader/PageHeader';
import { Input } from '../../components/ui/input/Input';
import InputDate from '../../components/ui/inputdate/InputDate';
import SearchInput from '../../components/ui/searchinput/SearchInput';
import FilterSelect from '../../components/ui/filterselect/FilterSelect';
import SearchableSelect from '../../components/ui/searchableselect/SearchableSelect';
import { Button } from '../../components/ui/button/Button';
import ActionButton from '../../components/ui/actionbutton/ActionButton';
import Badge from '../../components/ui/badge/Badge';
import LongTextInput from '../../components/ui/longtextinput/LongTextInput';
import UploadField from '../../components/ui/uploadfield/UploadField';
import ProgresBarV1 from '../../components/ui/progresbarv1/ProgresBarV1';
import ProgresBarV2 from '../../components/ui/progresbarv2/ProgresBarV2';
import ProgresBarV3 from '../../components/ui/progresbarv3/ProgresBarV3';
import InfoSection from '../../components/ui/infosection/InfoSection';
import NoteCard from '../../components/ui/notecard/NoteCard';
import PlanCard from '../../components/ui/plancard/PlanCard';
import TimelineTabel from '../../components/ui/timelinetabel/TimelineTabel';
import Pagination from '../../components/ui/pagination/Pagination';

const statusOptions = ['Open', 'Booking', 'Pemberkasan', 'Akad'];

const kategoriLayanan = [
  { value: 'internet', label: 'Internet & Connectivity', keywords: 'fiber broadband vpn dedicated' },
  { value: 'cloud', label: 'Cloud Infrastructure', keywords: 'iaas paas server storage' },
  { value: 'security', label: 'Security & Compliance', keywords: 'firewall soc endpoint audit' },
];

const progressSamples = [
  { label: 'Pemberkasan', current: 3, total: 10 },
  { label: 'Verifikasi Dokumen', current: 6, total: 10 },
  { label: 'Final Approval', current: 9, total: 10 },
];

const compactProgressSamples = [15, 58, 100];
const barOnlyProgressSamples = [18, 52, 87];

const planCardSamples = [
  { badge: '5 Tahun', value: 'Rp 6.393.096' },
  { badge: '10 Tahun', value: 'Rp 3.828.480' },
  { badge: '15 Tahun', value: 'Rp 3.017.583' },
  { badge: '20 Tahun', value: 'Rp 2.642.633' },
];

const timelineSamples = [
  { label: 'SPR', target: '22/09/2024', actual: '21/09/2024', status: 'Tepat Waktu' },
  { label: 'PPJB', target: '24/09/2024', actual: '25/09/2024', status: 'Terlambat' },
  { label: 'Pemberkasan', target: '03/10/2024', actual: '-', status: 'Belum' },
  { label: 'SP3K', target: '12/10/2024', actual: '12/10/2024', status: 'Selesai' },
];

const paketByKategori: Record<string, { value: string; label: string; keywords?: string }[]> = {
  internet: [
    { value: 'internet-basic', label: 'Paket Basic 50 Mbps', keywords: 'entry startup' },
    { value: 'internet-business', label: 'Paket Business 200 Mbps', keywords: 'corporate medium' },
    { value: 'internet-enterprise', label: 'Paket Enterprise 1 Gbps', keywords: 'high bandwidth' },
  ],
  cloud: [
    { value: 'cloud-dev', label: 'Cloud Dev Stack', keywords: 'dev test staging' },
    { value: 'cloud-production', label: 'Cloud Production Stack', keywords: 'production autoscale' },
    { value: 'cloud-dr', label: 'Cloud DR Site', keywords: 'backup disaster recovery' },
  ],
  security: [
    { value: 'security-managed', label: 'Managed SOC 8x5', keywords: 'monitoring incident' },
    { value: 'security-24x7', label: 'Managed SOC 24x7', keywords: 'siem response' },
    { value: 'security-audit', label: 'Compliance Audit Package', keywords: 'iso 27001 gap assessment' },
  ],
};

const previewCardClass = 'relative rounded border border-gray-200 bg-white p-4 shadow-sm';
const previewLabelClass = 'absolute left-4 top-4 text-[13px] font-medium text-gray-900';

const PreviewItem = ({ title, children, className = '' }: { title: string; children: ReactNode; className?: string }) => (
  <div className={`${previewCardClass} ${className}`}>
    <span className={previewLabelClass}>{title}</span>
    <div className="pt-8">{children}</div>
  </div>
);

const Component = () => {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');
  const [demoInput, setDemoInput] = useState('');
  const [demoDate, setDemoDate] = useState('2026-03-16');
  const [demoLongText, setDemoLongText] = useState('');
  const [selectedKategori, setSelectedKategori] = useState('');
  const [selectedPaket, setSelectedPaket] = useState('');
  const [pageV1, setPageV1] = useState(4);

  const paketOptions = useMemo(() => {
    if (!selectedKategori) return [];
    return paketByKategori[selectedKategori] || [];
  }, [selectedKategori]);

  useEffect(() => {
    setSelectedPaket('');
  }, [selectedKategori]);

  return (
    <section className="space-y-4">
      <PageHeader
        title="Komponent"
        subtitle="Preview komponen input, input date, filter, search, searchable select, progress bar, timeline tabel, info section, note card, plan card, dan upload."
      />

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
        <PreviewItem title="SearchInput">
          <SearchInput
            placeholder="Search data..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </PreviewItem>

        <PreviewItem title="FilterSelect">
          <FilterSelect
            allLabel="Semua Status"
            options={statusOptions}
            value={status}
            onChange={(event) => setStatus(event.target.value)}
          />
        </PreviewItem>

        <PreviewItem title="Input">
          <Input
            placeholder="Input demo..."
            value={demoInput}
            onChange={(event) => setDemoInput(event.target.value)}
          />
        </PreviewItem>

        <PreviewItem title="InputDate">
          <InputDate
            value={demoDate}
            onChange={(event) => setDemoDate(event.target.value)}
          />
        </PreviewItem>

        <PreviewItem title="SearchableSelect" className="xl:col-span-3">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <SearchableSelect
              value={selectedKategori}
              onChange={setSelectedKategori}
              options={kategoriLayanan}
              selectPlaceholder="Pilih kategori layanan..."
              searchPlaceholder="Cari kategori layanan..."
              emptyText="Kategori tidak ditemukan"
            />

            <SearchableSelect
              value={selectedPaket}
              onChange={setSelectedPaket}
              options={paketOptions}
              selectPlaceholder={selectedKategori ? 'Pilih paket layanan...' : 'Pilih kategori dulu...'}
              searchPlaceholder="Cari paket layanan..."
              emptyText="Paket tidak ditemukan"
              disabled={!selectedKategori}
            />
          </div>
        </PreviewItem>

        <PreviewItem title="LongTextInput" className="xl:col-span-3">
          <LongTextInput
            placeholder="Long text demo..."
            value={demoLongText}
            onChange={(event) => setDemoLongText(event.target.value)}
          />
        </PreviewItem>

        <PreviewItem title="Button">
          <div className="flex flex-wrap items-center gap-2">
            <Button variant="premium" size="md" icon={Plus}>
              Tombol Premium
            </Button>
            <Button variant="outline" size="md">
              Tombol Outline
            </Button>
            <Button variant="danger" size="md">
              Tombol Danger
            </Button>
          </div>
        </PreviewItem>

        <PreviewItem title="ActionButton">
          <div className="flex flex-wrap items-center gap-2">
            <ActionButton icon={Pencil}>Edit</ActionButton>
            <ActionButton icon={Trash2} variant="danger">
              Hapus
            </ActionButton>
          </div>
        </PreviewItem>

        <PreviewItem title="Badge">
          <div className="flex flex-wrap items-center gap-2">
            <Badge status="Open" />
            <Badge status="Booking" />
            <Badge status="Pemberkasan" />
            <Badge status="Akad" />
            <Badge status="Superior" />
          </div>
        </PreviewItem>

        <PreviewItem title="InfoSection" className="xl:col-span-3">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <InfoSection variant="success">
              Form tersimpan untuk paket demo dengan kategori Internet & Connectivity.
            </InfoSection>
            <InfoSection variant="warning">
              Paket layanan demo akan dihapus jika kamu melanjutkan konfirmasi ini.
            </InfoSection>
          </div>
        </PreviewItem>

        <PreviewItem title="NoteCard" className="xl:col-span-3">
          <NoteCard>
            Perhitungan di atas merupakan estimasi cicilan per bulan. Nilai aktual dapat bervariasi
            tergantung pada kebijakan bank, biaya asuransi, biaya provisi, dan fluktuasi suku bunga.
            Pastikan untuk melakukan verifikasi ulang dengan pihak perbankan terkait.
          </NoteCard>
        </PreviewItem>

        <PreviewItem title="PlanCard" className="xl:col-span-3">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {planCardSamples.map((item) => (
              <PlanCard key={item.badge} badge={item.badge} value={item.value} />
            ))}
          </div>
        </PreviewItem>

        <PreviewItem title="ProgresBarV1" className="xl:col-span-3">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            {progressSamples.map((item) => (
              <ProgresBarV1
                key={item.label}
                label={item.label}
                current={item.current}
                total={item.total}
              />
            ))}
          </div>
        </PreviewItem>

        <PreviewItem title="ProgresBarV2" className="xl:col-span-3">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            {compactProgressSamples.map((value) => (
              <ProgresBarV2 key={value} value={value} />
            ))}
          </div>
        </PreviewItem>

        <PreviewItem title="ProgresBarV3" className="xl:col-span-3">
          <div className="space-y-3">
            {barOnlyProgressSamples.map((value) => (
              <ProgresBarV3 key={value} value={value} />
            ))}
          </div>
        </PreviewItem>

        <PreviewItem title="TimelineTabel" className="xl:col-span-3">
          <TimelineTabel items={timelineSamples} />
        </PreviewItem>

        <PreviewItem title="UploadField" className="xl:col-span-3">
          <UploadField />
        </PreviewItem>

        <PreviewItem title="Pagination" className="xl:col-span-3">
          <div className="rounded-xl border border-dashed border-gray-200 bg-gray-50/70 p-4">
            <p className="mb-3 text-sm font-medium text-gray-900">Pagination V1</p>
            <Pagination
              currentPage={pageV1}
              totalPages={8}
              onPageChange={setPageV1}
              totalItems={120}
              itemLabel="items"
            />
          </div>
        </PreviewItem>
      </div>
    </section>
  );
};

export default Component;




