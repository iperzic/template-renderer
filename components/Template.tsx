import CategoryLister from '@/components/groups/CategoryLister';
import HeroBanner from '@/components/groups/HeroBanner';

enum GroupCode {
  HeroBanner = 'hero-banner',
  CategoryLister = 'category_lister',
}

type Group = {
  code: GroupCode;
  elements: any;
};

export type TemplatePageProps = {
  groups: Array<Group>;
};

function getGroup(group: Group, index: number) {
  let Component = null;

  switch (group.code) {
    case GroupCode.CategoryLister:
      Component = <CategoryLister key={index} elements={group.elements} />;
      break;
    case GroupCode.HeroBanner:
      Component = <HeroBanner key={index} elements={group.elements} />;
      break;
  }

  return Component;
}

export default function Template({ groups }: TemplatePageProps) {
  return <>{groups.map(getGroup)}</>;
}
