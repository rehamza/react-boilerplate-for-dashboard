import { BoxComponent, GridComponent, BaseLink, BaseIconButton } from '../UILib';
import ButtonComponent from '../Shared/Button';
import BreadcrumbsComponent from '../Shared/Breadcrumbs';
import { Close } from '../../assets/Icons';

// components

interface TopbarProps {
  isForm?: boolean;
  cancelPath?: string;
  handleSave?: () => void;
}

function Topbar({ isForm, cancelPath, handleSave }: TopbarProps) {
  const onSave = () => {
    handleSave?.();
  };
  return (
    <BoxComponent
      sx={{
        position: isForm ? 'fixed' : 'relative',
        top: 0, // Fixed at the top
        left: 0,
        right: 0, // Spans the entire width
        zIndex: 999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 'auto',
        borderBottom: '1px solid var(--Neutrals-450, #B7BAC3)',
        backgroundColor: 'white.200',
      }}
    >
      <BoxComponent
        sx={{
          width: '100%',
          padding: '50px 70px 20px 70px',
        }}
      >
        <GridComponent spacing={2} container direction="row" justifyContent="center" alignItems="center">
          {isForm && (
            <GridComponent item sm={2} xs={6}>
              <BaseLink href={cancelPath}>
                <BaseIconButton color="primary" sx={{ color: 'dark' }}>
                  <Close />
                </BaseIconButton>
              </BaseLink>
            </GridComponent>
          )}
          <GridComponent item sm={isForm ? 8 : 12} xs={12}>
            <BoxComponent
              sx={{
                width: '100%',
                height: '100%',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                display: 'inline-flex',
                gap: 1,
              }}
            >
              <BreadcrumbsComponent />
            </BoxComponent>
          </GridComponent>

          {isForm && (
            <GridComponent item sm={2} xs={6}>
              <ButtonComponent text="Save" variant="contained" onClick={onSave} />
            </GridComponent>
          )}
        </GridComponent>
      </BoxComponent>
    </BoxComponent>
  );
}

export default Topbar;
