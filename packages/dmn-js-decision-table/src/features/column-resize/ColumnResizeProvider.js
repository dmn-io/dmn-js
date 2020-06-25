import ResizeColumn from './components/ResizeColumn';


export default function ColumnResizeProvider(
    components
) {

  components.onGetComponent('cell-inner', (context = {}) => {
    const { cellType } = context;

    if (cellType === 'input-cell' || cellType === 'output-cell') {
      return ResizeColumn;
    }
  });
}

ColumnResizeProvider.$inject = [
  'components'
];