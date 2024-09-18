import React from 'react';
import { useReactTable, createColumnHelper, getCoreRowModel, getSortedRowModel } from '@tanstack/react-table';
import '../css/CurrencyTable.css';

const CurrencyTable = ({ selectedCurrency, currenciesData }) => {
  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor('base', {
      header: 'Base Currency',
    }),
    columnHelper.accessor('currency', {
      header: 'Currency',
      enableSorting: true,
    }),
    columnHelper.accessor('rate', {
      header: 'Exchange Rate',
      enableSorting: true,
    }),
  ];

  const data = React.useMemo(() => {
    return Object.entries(currenciesData).map(([currency, rate]) => ({
      base: selectedCurrency,
      currency: currency,
      rate: rate.toFixed(4),
    }));
  }, [currenciesData, selectedCurrency]);

  const { getHeaderGroups, getRowModel } = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <table className="currency-table">
      <thead>
        {getHeaderGroups().map(headerGroup => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <th
                key={header.id}
                onClick={header.column.getToggleSortingHandler()}
                style={{ cursor: 'pointer' }}
              >
                {header.column.columnDef.header}
                <span className="sort-arrow">
                  {header.column.getIsSorted() ? (header.column.getIsSorted() === 'asc' ? ' 🔼' : ' 🔽') : ' 🔽'}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {getRowModel().rows.map(row => (
          <tr key={row.id}>
            {row.getVisibleCells().map(cell => (
              <td key={cell.id}>{cell.getValue()}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CurrencyTable;
