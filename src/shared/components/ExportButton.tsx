import React from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { exportToCSV, showExportAudit } from '../utils/export';
import { usePermissions } from '../hooks/usePermissions';
import type { Module } from '../permissions';

interface ExportButtonProps<T> {
  module: Module;
  data: T[];
  filename: string;
  columns?: { key: keyof T; label: string }[];
}

export function ExportButton<T extends Record<string, any>>({
  module,
  data,
  filename,
  columns
}: ExportButtonProps<T>) {
  const { canExport } = usePermissions(module);

  if (!canExport) return null;

  const handleExport = () => {
    showExportAudit(String(module), data.length, () => {
      exportToCSV(data, filename, columns);
    });
  };

  return (
    <Button variant="outline" size="sm" onClick={handleExport}>
      <Download className="h-4 w-4 mr-2" />
      Export CSV
    </Button>
  );
}
