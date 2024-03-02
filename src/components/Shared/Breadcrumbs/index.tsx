import { BaseBreadcrumbsComponent, TypographyComponent, BaseLink } from '../../UILib';
import { useBreadcrumbs } from '../../../contexts/Breadcrumbs';

const BreadcrumbsComponent = () => {
  const { title, breadcrumbs } = useBreadcrumbs();

  return (
    <>
      <BaseBreadcrumbsComponent>
        {breadcrumbs?.map((v, index) =>
          v.path ? (
            <BaseLink key={index} underline="hover" color="inherit" href={v.path}>
              <TypographyComponent variant="h5">{v.title}</TypographyComponent>
            </BaseLink>
          ) : (
            <TypographyComponent key={index} variant="h5">
              {v.title}
            </TypographyComponent>
          )
        )}
        <TypographyComponent variant="h5">{title}</TypographyComponent>
      </BaseBreadcrumbsComponent>
      <TypographyComponent variant="h1">{title}</TypographyComponent>
    </>
  );
};

export default BreadcrumbsComponent;
