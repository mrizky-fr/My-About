import { useState } from 'react';
import { AlertTriangle } from 'lucide-react';
import PageHeader from '../../components/ui/pageheader/PageHeader';
import { Button } from '../../components/ui/button/Button';
import ConfirmModal from '../../components/ui/confirmmodal/ConfirmModal';
import InfoSection from '../../components/ui/infosection/InfoSection';

const ConfirmModalPage = () => {
  const [open, setOpen] = useState(true);
  const [result, setResult] = useState('');

  return (
    <section className="space-y-4">
      <PageHeader
        title="Confirm Modal"
        subtitle="Preview modal konfirmasi sederhana dengan body text saja."
      />

      <div className="space-y-4 rounded border border-gray-200 bg-white p-4 shadow-sm">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-medium text-gray-900">Konfirmasi aksi kritikal</p>
            <p className="text-sm text-gray-500">
              Komponen ini dipakai untuk kasus hapus, batalkan, atau approve yang butuh konfirmasi cepat.
            </p>
          </div>
          <Button variant="danger" icon={AlertTriangle} onClick={() => setOpen(true)}>
            Buka Confirm Modal
          </Button>
        </div>

        {result ? (
          <InfoSection variant="success">{result}</InfoSection>
        ) : null}
      </div>

      <ConfirmModal
        open={open}
        onClose={() => setOpen(false)}
        onConfirm={() => {
          setResult('Konfirmasi diterima. Paket demo berhasil dihapus dari preview.');
          setOpen(false);
        }}
        title="Hapus Paket Demo"
        confirmLabel="Ya, Hapus"
      >
        <InfoSection variant="warning">
          Paket layanan <span className="font-semibold text-gray-900">Cloud Production Stack</span> akan dihapus dari daftar demo.
          <span className="block pt-1 text-xs text-red-600/80">
            Aksi ini hanya simulasi untuk preview komponen dan tidak memengaruhi data lain.
          </span>
        </InfoSection>
      </ConfirmModal>
    </section>
  );
};

export default ConfirmModalPage;
