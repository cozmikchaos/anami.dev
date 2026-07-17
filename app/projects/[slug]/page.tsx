import projects from "../../data/projects.json";
import { ProjectDetail } from "../../components/Portfolio";

export function generateStaticParams() { return projects.map((project) => ({ slug: project.slug })); }

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug) || projects[0];
  return <ProjectDetail project={project} />;
}
