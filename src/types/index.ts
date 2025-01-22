// Recipe Types
export interface Recipe {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  ingredients: Ingredient[];
  instructions: Instruction[];
  details: RecipeDetails;
  metadata: RecipeMetadata;
}

export interface Ingredient {
  name: string;
  amount: number;
  unit: string;
}

export interface Instruction {
  step: number;
  description: string;
}

export interface RecipeDetails {
  prepTime: number;    // in minutes
  cookTime: number;    // in minutes
  servings: number;
  difficulty: 'easy' | 'medium' | 'hard';
  cuisine?: string;
}

export interface RecipeMetadata {
  createdAt: Date;
  updatedAt: Date;
  isAIGenerated: boolean;
}

// API Types
export interface APIResponse<T> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: any;
  };
  meta?: {
    page?: number;
    limit?: number;
    total?: number;
  };
}

// Search and Filter Types
export interface RecipeFilters {
  prepTime?: number;
  cuisine?: string;
  difficulty?: 'easy' | 'medium' | 'hard';
  sortBy?: 'date' | 'time';
  page?: number;
  limit?: number;
}

// AI Generation Types
export interface GenerateRecipeParams {
  ingredients?: string[];
  cuisine?: string;
  difficulty?: 'easy' | 'medium' | 'hard';
}

export interface RateLimitInfo {
  remaining: number;
  reset: number;
}
