import { CrudService } from "@/services/api/crud.service";

export class DoughResource extends CrudService {
  constructor() {
    super("/api/dough");
  }

  getDoughs() {
    return this.get();
  }
}
