import { Navigate, Route, Routes } from 'react-router-dom';
import AdminLayout from './AdminLayout';
import DashboardPage from '../pages/dash/DashboardPage';
import PageTabel from '../pages/page-tabel/PageTabel';
import PageTabelV2 from '../pages/page-tabel-v2/PageTabelV2';
import Component from '../pages/komponent/Component';
import FormModalPage from '../pages/komponent/FormModalPage';
import ConfirmModalPage from '../pages/komponent/ConfirmModalPage';
import CardTabelV1Page from '../pages/card-tabel-v1/CardTabelV1Page';

const AdminApp = () => (
  <Routes>
    <Route element={<AdminLayout />}>
      <Route index element={<DashboardPage />} />
      <Route path="page-tabel" element={<PageTabel />} />
      <Route path="page-tabel-v2" element={<PageTabelV2 />} />
      <Route path="card-tabel-v1" element={<CardTabelV1Page />} />
      <Route path="komponent" element={<Component />} />
      <Route path="komponent/form-modal" element={<FormModalPage />} />
      <Route path="komponent/confirm-modal" element={<ConfirmModalPage />} />
    </Route>
    <Route path="*" element={<Navigate to="/dashboard" replace />} />
  </Routes>
);

export default AdminApp;

