import { BoxComponent, GridComponent, BaseLink } from '../../../UILib';

import ButtonComponent from '../../Button';
import { style } from './tableHeader.style';
import SearchBar from '../../SearchBar';

interface TableHeaderProps {
  isTableDraggable: boolean;
  search: string;
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleDone: () => void;
  createPath: string;
  showDraggrable?: boolean;
}

export default function TabelHeader({
  isTableDraggable,
  search,
  handleSearch,
  handleDone,
  createPath,
  showDraggrable = false,
}: TableHeaderProps) {
  return (
    <BoxComponent sx={{ paddingBottom: { md: 5, xs: 3 } }}>
      <GridComponent container spacing={2}>
        <GridComponent item xs={12} md={6}>
          <BoxComponent>
            <SearchBar search={search} handleSearch={handleSearch} />
          </BoxComponent>
        </GridComponent>

        <GridComponent item xs={12} md={6} sx={style.buttonBox}>
          <BoxComponent
            sx={{
              display: 'flex',
              gap: 2,
            }}
          >
            {showDraggrable && (
              <ButtonComponent
                text={isTableDraggable == false ? 'Rearrange' : 'Done'}
                variant="outlined"
                onClick={handleDone}
              />
            )}

            <BaseLink href={createPath}>
              <ButtonComponent text="Create" variant="contained" />
            </BaseLink>
          </BoxComponent>
        </GridComponent>
      </GridComponent>
    </BoxComponent>
  );
}
