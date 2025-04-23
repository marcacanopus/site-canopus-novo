import BuildingTemplate from "./buildingTemplate";

export async function generateStaticParams() {
  return [{
    slug: 'slug'
  }];
}

export default function Page() {
  return <BuildingTemplate />;
}
