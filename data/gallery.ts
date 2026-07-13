export interface Photograph {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  projectTitle: string;
  projectUrl: string;
  year: string;
  location: string;
  role: string;
  tags: string[];
  photographer?: string;
  details?: string;
}

export const photographs: Photograph[] = [
  {
    id: "ellsworth-library-processing",
    title: "Monograph Library Cataloging",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "/ellsworth-2.png",
    imageAlt: "Jennifer Payan entering monograph details into the library catalog system",
    projectTitle: "Ellsworth Kelly Foundation Archivist",
    projectUrl: "/ellsworth-kelly-foundation-archivist",
    year: "2025",
    location: "Spencertown, NY",
    role: "Archivist Intern",
    tags: ["Archives", "Library", "Ellsworth Kelly Studio", "Cataloging"],
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    id: "ellsworth-carlson-files-intake",
    title: "Carlson Fabrication Files Assessment",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "/ellsworth-3.png",
    imageAlt: "Jennifer organizing files and folders on a workspace table",
    projectTitle: "Ellsworth Kelly Foundation Archivist",
    projectUrl: "/ellsworth-kelly-foundation-archivist",
    year: "2025",
    location: "Spencertown, NY",
    role: "Archivist Intern",
    tags: ["Archives", "Digitization", "Ellsworth Kelly Studio", "Conservation"],
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    id: "ellsworth-studio-research",
    title: "Archival Research in Studio",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "/ellsworth-4.png",
    imageAlt: "Jennifer standing in front of bookshelves reviewing documents",
    projectTitle: "Ellsworth Kelly Foundation Archivist",
    projectUrl: "/ellsworth-kelly-foundation-archivist",
    year: "2025",
    location: "Spencertown, NY",
    role: "Archivist Intern",
    tags: ["Archives", "Research", "Ellsworth Kelly Studio"],
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    id: "ellsworth-library-shelving",
    title: "Library Stack Arrangement",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "/ellsworth-5.png",
    imageAlt: "Jennifer arranging white and colored books on high white shelving units",
    projectTitle: "Ellsworth Kelly Foundation Archivist",
    projectUrl: "/ellsworth-kelly-foundation-archivist",
    year: "2025",
    location: "Spencertown, NY",
    role: "Archivist Intern",
    tags: ["Library", "Archives", "Ellsworth Kelly Studio"],
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    id: "ellsworth-project-totems",
    title: "Studio Model Evaluation",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "/ellsworth-project-1.png",
    imageAlt: "Archival stacks with tall minimalist wooden totemic models",
    projectTitle: "Ellsworth Kelly Foundation Archivist",
    projectUrl: "/ellsworth-kelly-foundation-archivist",
    year: "2025",
    location: "Spencertown, NY",
    role: "Archivist Intern",
    tags: ["Research", "Sculpture", "Ellsworth Kelly Studio"],
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    id: "ellsworth-folder-metadata",
    title: "Fabrication Folder Cataloging",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "/ellsworth-project-2.png",
    imageAlt: "Laptop displaying metadata fields next to open archival folders",
    projectTitle: "Ellsworth Kelly Foundation Archivist",
    projectUrl: "/ellsworth-kelly-foundation-archivist",
    year: "2025",
    location: "Spencertown, NY",
    role: "Archivist Intern",
    tags: ["Archives", "Digitization", "Cataloging"],
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    id: "ellsworth-carlson-drawings",
    title: "Engineering Drawings Examination",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "/ellsworth-project-3.png",
    imageAlt: "Oversized engineering blueprint spread across a workspace table",
    projectTitle: "Ellsworth Kelly Foundation Archivist",
    projectUrl: "/ellsworth-kelly-foundation-archivist",
    year: "2025",
    location: "Spencertown, NY",
    role: "Archivist Intern",
    tags: ["Archives", "Digitization", "Sculpture"],
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    id: "ellsworth-project-database",
    title: "Digitization Tracking Database",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "/ellsworth-project-4.png",
    imageAlt: "Excel spreadsheet showing file paths and tracking indicators on screen",
    projectTitle: "Ellsworth Kelly Foundation Archivist",
    projectUrl: "/ellsworth-kelly-foundation-archivist",
    year: "2025",
    location: "Spencertown, NY",
    role: "Archivist Intern",
    tags: ["Archives", "Digitization", "Cataloging"],
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    id: "ellsworth-archival-boxes",
    title: "Carlson File Rehousing",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "/ellsworth-project-5.png",
    imageAlt: "Archival folders arranged inside gray archival document boxes on tables",
    projectTitle: "Ellsworth Kelly Foundation Archivist",
    projectUrl: "/ellsworth-kelly-foundation-archivist",
    year: "2025",
    location: "Spencertown, NY",
    role: "Archivist Intern",
    tags: ["Archives", "Ellsworth Kelly Studio"],
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    id: "inner-resources-assessment",
    title: "Mural Surface Documentation",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "/inner-resources.png",
    imageAlt: "Jennifer working on scaffolding in front of a colorful public mural",
    projectTitle: "“Inner Resources” Mural Conservation",
    projectUrl: "/inner-resources-mural",
    year: "2024",
    location: "East Los Angeles, CA",
    role: "Conservation Technician",
    tags: ["Conservation", "Mural", "Public Art", "Research"],
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    id: "dominguez-dry-brushing",
    title: "Sculpture Dry Brush Cleaning",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "/dominguez-thumbnail.png",
    imageAlt: "Jennifer using a soft-bristled brush to clean concrete sculpture surfaces",
    projectTitle: "Dominguez Sculpture Restoration",
    projectUrl: "/dominguez-sculpture-restoration",
    year: "2025",
    location: "El Monte, CA",
    role: "Conservationist",
    tags: ["Conservation", "Sculpture", "Public Art"],
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    id: "dominguez-color-stabilization",
    title: "Concrete Paint Stabilization",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "/dominguez-1.png",
    imageAlt: "Jennifer painting fine colorful details on a concrete dragon sculpture",
    projectTitle: "Dominguez Sculpture Restoration",
    projectUrl: "/dominguez-sculpture-restoration",
    year: "2025",
    location: "El Monte, CA",
    role: "Conservationist",
    tags: ["Conservation", "Sculpture", "Public Art"],
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    id: "dominguez-sculpture-detail",
    title: "Structural Assessment",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "/dominguez-2.png",
    imageAlt: "Jennifer working on concrete sculpture elements in Whittier Narrows",
    projectTitle: "Dominguez Sculpture Restoration",
    projectUrl: "/dominguez-sculpture-restoration",
    year: "2025",
    location: "El Monte, CA",
    role: "Conservationist",
    tags: ["Conservation", "Sculpture", "Public Art", "Research"],
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    id: "olvera-mural-cleaning",
    title: "Olvera Street Mural Consolidation",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "/ovlvera-st-2.JPEG",
    imageAlt: "Jennifer analyzing mural sections in Downtown Los Angeles",
    projectTitle: "Blessing of the Animals Mural - Olvera St.",
    projectUrl: "/blessing-animals-mural-olvera-street",
    year: "2025",
    location: "Los Angeles, CA",
    role: "Conservationist",
    tags: ["Conservation", "Mural", "Public Art"],
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    id: "olvera-mural-varnishing",
    title: "Final Protective Coating Inspecting",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "/olvera-st-3.JPEG",
    imageAlt: "Jennifer standing in front of the Blessing of the Animals mural",
    projectTitle: "Blessing of the Animals Mural - Olvera St.",
    projectUrl: "/blessing-animals-mural-olvera-street",
    year: "2025",
    location: "Los Angeles, CA",
    role: "Conservationist",
    tags: ["Conservation", "Mural", "Public Art"],
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    id: "olvera-mural-before-after",
    title: "Mural Details Side-by-Side",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "/befora-after-olvera-st.png",
    imageAlt: "Side-by-side photograph showing mural book details before and after cleaning",
    projectTitle: "Blessing of the Animals Mural - Olvera St.",
    projectUrl: "/blessing-animals-mural-olvera-street",
    year: "2025",
    location: "Los Angeles, CA",
    role: "Conservationist",
    tags: ["Conservation", "Mural", "Public Art"],
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  }
];

export function getPhotoById(id: string): Photograph | undefined {
  return photographs.find(photo => photo.id === id);
}

export function getRelatedPhotos(currentPhoto: Photograph, limit = 4): Photograph[] {
  return photographs
    .filter(photo => photo.id !== currentPhoto.id)
    .map(photo => {
      let score = 0;
      if (photo.projectTitle === currentPhoto.projectTitle) score += 5;
      const sharedTags = photo.tags.filter(tag => currentPhoto.tags.includes(tag));
      score += sharedTags.length * 2;
      return { photo, score };
    })
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .map(item => item.photo)
    .slice(0, limit);
}

export function getAllTags(): string[] {
  const tagsSet = new Set<string>();
  photographs.forEach(photo => {
    photo.tags.forEach(tag => tagsSet.add(tag));
  });
  return Array.from(tagsSet).sort();
}
