import { useState, type FormEvent } from 'react';
import { FileText } from 'lucide-react';
import PageHeader from '../../components/ui/pageheader/PageHeader';
import { Button } from '../../components/ui/button/Button';
import { Input } from '../../components/ui/input/Input';
import SearchableSelect from '../../components/ui/searchableselect/SearchableSelect';
import LongTextInput from '../../components/ui/longtextinput/LongTextInput';
import UploadField from '../../components/ui/uploadfield/UploadField';
import FormModal from '../../components/ui/formmodal/FormModal';
import InfoSection from '../../components/ui/infosection/InfoSection';

const kategoriOptions = [
  { value: 'internet', label: 'Internet & Connectivity', keywords: 'fiber broadband vpn dedicated' },
  { value: 'cloud', label: 'Cloud Infrastructure', keywords: 'server storage iaas paas' },
  { value: 'security', label: 'Security & Compliance', keywords: 'audit endpoint firewall soc' },
];

const prioritasOptions = [
  { value: 'tinggi', label: 'Prioritas Tinggi' },
  { value: 'sedang', label: 'Prioritas Sedang' },
  { value: 'normal', label: 'Prioritas Normal' },
];

const FormModalPage = () => {
  const [open, setOpen] = useState(true);
  const [form, setForm] = useState({
    namaPaket: '',
    namaPic: '',
    kategori: '',
    prioritas: '',
    catatan: '',
  });
  const [savedSummary, setSavedSummary] = useState('');

  const updateField = (key: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSavedSummary(
      `Form tersimpan untuk ${form.namaPaket || 'paket tanpa nama'} dengan kategori ${form.kategori || '-'} dan prioritas ${form.prioritas || '-'}.`
    );
    setOpen(false);
  };

  return (
    <section className="space-y-4">
      <PageHeader
        title="Form Modal"
        subtitle="Preview modal form dengan komponen input reusable yang sudah ada di DealTech UI."
      />

      <div className="space-y-4 rounded border border-gray-200 bg-white p-4 shadow-sm">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-medium text-gray-900">Komponen di dalam modal</p>
            <p className="text-sm text-gray-500">
              Input, Searchable Select, Long Text Input, Upload Field, dan Info Section dipakai langsung di body modal.
            </p>
          </div>
          <Button variant="premium" icon={FileText} onClick={() => setOpen(true)}>
            Buka Form Modal
          </Button>
        </div>

        {savedSummary ? (
          <InfoSection variant="success">{savedSummary}</InfoSection>
        ) : null}
      </div>

      <FormModal
        open={open}
        onClose={() => setOpen(false)}
        title="Tambah Paket Layanan"
        size="xl"
        formId="dealtech-form-modal-demo"
        submitLabel="Simpan Data"
      >
        <form id="dealtech-form-modal-demo" onSubmit={handleSubmit} className="space-y-4">
          <InfoSection variant="success">
            Lengkapi data paket layanan, lalu klik Simpan Data untuk melihat preview hasil komponen.
          </InfoSection>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-gray-700">Nama Paket</label>
              <Input
                placeholder="Masukkan nama paket..."
                value={form.namaPaket}
                onChange={(event) => updateField('namaPaket', event.target.value)}
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-gray-700">Nama PIC</label>
              <Input
                placeholder="Masukkan nama PIC..."
                value={form.namaPic}
                onChange={(event) => updateField('namaPic', event.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-gray-700">Kategori Layanan</label>
              <SearchableSelect
                value={form.kategori}
                onChange={(value) => updateField('kategori', value)}
                options={kategoriOptions}
                selectPlaceholder="Pilih kategori layanan..."
                searchPlaceholder="Cari kategori layanan..."
                emptyText="Kategori tidak ditemukan"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-gray-700">Prioritas</label>
              <SearchableSelect
                value={form.prioritas}
                onChange={(value) => updateField('prioritas', value)}
                options={prioritasOptions}
                selectPlaceholder="Pilih prioritas..."
                searchPlaceholder="Cari prioritas..."
                emptyText="Prioritas tidak ditemukan"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-700">Catatan</label>
            <LongTextInput
              placeholder="Tambahkan catatan untuk paket layanan ini..."
              value={form.catatan}
              onChange={(event) => updateField('catatan', event.target.value)}
            />
          </div>

          <UploadField
            title="Lampiran Proposal"
            description="Upload lampiran pendukung untuk paket layanan yang sedang dibuat."
            placeholder="Klik untuk upload lampiran"
            accept=".pdf,.jpg,.jpeg,.png"
          />
        </form>
      </FormModal>
    </section>
  );
};

export default FormModalPage;
