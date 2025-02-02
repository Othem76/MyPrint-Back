import CreateMaterialPayload from "#models/material/dto/createMaterialPayload";
import UpdateMaterialPayload from "#models/material/dto/updateMaterialPayload";
import Material from "#models/material/material";

export default interface MaterialRepositoryInterface {
  getAllMaterials(): Promise<Material[]>;
  getMaterialById(materialId: string): Promise<Material>;
  createMaterial(material: CreateMaterialPayload): Promise<Material>;
  updateMaterial(
    materialId: string,
    material: UpdateMaterialPayload
  ): Promise<Material>;
  deleteMaterial(materialId: string): Promise<void>;
}
