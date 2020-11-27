export interface AssayResultsProperties {
    operator: Property;
    result: Property;
    result_id: Property;
    target: Property;
    unit: Property;
    value: Property;
}
  
export interface Property {
    type: string;
    description: string;
    properties?: AssayResultsProperties
    enum?: string[];
}
  
export interface CompoundSchema {
    ALogP: Property;
    assay_results: Property;
    compound_id: Property;
    image: Property;
    molecular_formula: Property;
    molecular_weight: Property;
    num_rings: Property;
    smiles: Property;
}
  
export interface Schema {
    $id: string;
    $schema: string;
    description: string;
    properties: CompoundSchema;
    required: string[]
    type: string;
}
  
export interface AssayResult {
    result_id: number;
    target: string;
    result: string;
    operator: string;
    value: number;
    unit: string;
  }
  
export interface Compound {
    ALogP: number;
    assay_results: AssayResult[];
    compound_id: number;
    image: string;
    molecular_formula: string;
    molecular_weight: number;
    num_rings: number;
    smiles: string;
}
  