
export interface GeminiResults {
  productos: Product[];
  recomendacion_final: string;
  total_results: number
}

export interface SearchEvent {
  id: string;
  query: string;
  result: GeminiResults;  // ✅ un objeto, no un array
  createdAt: string;
  status: string
  
}

export interface HistoryEntry {
  id: string;
  query: string;
  result: GeminiResults;  // ✅ un objeto, no un array
  createdAt: string;
}


export interface CreatedAt {
  _seconds: number
  _nanoseconds: number
}


export interface Product {
  position?: number
  title?: string
  product_link?: string
  product_id?: string
  serpapi_product_api?: string
  immersive_product_page_token?: string
  serpapi_immersive_product_api?: string
  source?: string
  source_icon?: string
  multiple_sources?: boolean
  price?: string
  extracted_price?: number
  installment?: Installment
  rating?: number
  reviews?: number
  thumbnail?: string
  serpapi_thumbnail?: string
  thumbnails?: string[]
  serpapi_thumbnails?: string[]
  pros?: string[]
  contras?: string[]
  immersive_details?: ImmersiveDetails
  id?: number
  brand?: string
  model?: string
  link?: string
  extension?: string[]
  buy_options?: BuyOption[]
  image?: string
  extensions?: any
  vendor?: any
  cons?: string[]
  marca?: string
  modelo?: string
  rate?: string
  descripcion?: string
  caracteristicas?: string[]
  pricio?: any
  motivo_seleccion?: string
  precio?: number
}

export interface Installment {
  price: string
  extracted_price: number
  period: number
}

export interface ImmersiveDetails {
  thumbnails: string[]
  title: string
  brand: string
  reviews: number
  rating: number
  stores: Store[]
  about_the_product: AboutTheProduct
  ratings: Rating[]
  user_reviews: UserReview[]
  price_range?: string
  discussions_and_forums?: DiscussionsAndForum[]
  videos?: Video[]
  more_options?: MoreOption[]
  
}

export interface Store {
  name: string
  logo: string
  link: string
  title: string
  rating?: number
  reviews?: number
  details_and_offers: string[]
  price: string
  extracted_price: number
  shipping?: string
  total: string
  extracted_total: number
  shipping_extracted?: number
  tag?: string
}

export interface AboutTheProduct {
  features: Feature[]
  title?: string
  link?: string
  displayed_link?: string
  icon?: string
  description?: string
}

export interface Feature {
  title: string
  value: string
}

export interface Rating {
  stars: number
  amount: number
}

export interface UserReview {
  title?: string
  text: string
  user_name?: string
  source: string
  rating: number
  date: string
  icon: string
}

export interface DiscussionsAndForum {
  title: string
  link: string
  source: string
  icon: string
  date: string
  items: Item[]
  comments?: number
}

export interface Item {
  snippet: string
  link: string
  top_answer?: boolean
  votes?: number
}

export interface Video {
  title: string
  link: string
  source: string
  channel?: string
  duration: string
  thumbnail: string
  preview?: string
}

export interface MoreOption {
  title: string
  thumbnail: string
  price: string
  extracted_price: number
  reviews?: number
  rating?: number
  serpapi_link: string
  original_price?: string
  extracted_original_price?: number
}

export interface BuyOption {
  link: string
  source: string
  price: string
}
