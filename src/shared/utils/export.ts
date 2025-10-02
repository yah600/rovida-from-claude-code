// CSV Export (FE-only)
export function exportToCSV<T extends Record<string, any>>(
  data: T[],
  filename: string,
  columns?: { key: keyof T; label: string }[]
) {
  if (!data.length) return;

  const keys = columns ? columns.map(c => c.key) : (Object.keys(data[0]) as (keyof T)[]);
  const headers = columns ? columns.map(c => c.label) : keys.map(String);

  const csvRows = [
    headers.join(','),
    ...data.map(row =>
      keys.map(k => {
        const val = row[k];
        const str = val === null || val === undefined ? '' : String(val);
        return `"${str.replace(/"/g, '""')}"`;
      }).join(',')
    )
  ];

  const blob = new Blob([csvRows.join('\n')], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${filename}.csv`;
  link.click();
  URL.revokeObjectURL(url);
}

// PDF Export (FE-only, using print to PDF)
export function exportToPDF(elementId: string, filename: string) {
  const el = document.getElementById(elementId);
  if (!el) return;

  const originalTitle = document.title;
  document.title = filename;

  window.print();

  setTimeout(() => {
    document.title = originalTitle;
  }, 100);
}

// Audit banner for exports
export function showExportAudit(
  module: string,
  recordCount: number,
  onConfirm: () => void,
  onCancel?: () => void
) {
  const msg = `You are about to export ${recordCount} record(s) from ${module}. This action will be logged. Continue?`;
  if (confirm(msg)) {
    onConfirm();
  } else {
    onCancel?.();
  }
}
