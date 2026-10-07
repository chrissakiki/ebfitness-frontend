interface Children {
  children: React.ReactNode;
}

type PaginatedResponse<T> = {
  data: T[];
  pagination: {
    total_items: number;
    total_pages: number;
    current_page: number;
    items_per_page: number;
  };
};

type Banner = {
  readonly id: number | null;
  title: string;
  sub_title: string;
  image_url: string;
};

type Milestone = {
  readonly id: number | null;
  title: string;
  quantity: string;
};

type Testimonial = {
  readonly id: number | null;
  author_name: string;
  text: string;
  rating: number;
};

type Service = {
  readonly id: number | null;
  category: string;
  name: string;
  sub_name: string | null;
  pricing: string;
  number_of_sessions: string;
  duration: string;
  image_url: string;
  thumbnail_url: string;
  short_description: string;
  detailed_description: string;
  items: ServiceItem[] | null;
};

type ServiceItem = {
  readonly id: number | null;
  service_id: number;
  feature_description: string;
};

type Achievement = {
  readonly id: number | null;
  type: 'logos' | 'certificates';
  name: string;
  image_url: string;
};

type Section = {
  readonly id: number | null;
  type: 'philosophy' | 'about'
  title: string;
  image_url: string;
  thumbnail_url?: string;
  items: SectionItem[];
}

type SectionItem = {
  readonly id: number | null;
  section_id: number;
  title: string;
  image_url: string;
  description: string; // long text
}