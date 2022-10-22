import axios from "axios";
import { ApiService } from "@/services/api/api.service";
import JwtService from "@/services/jwt/jwt.service";

export class AuthService extends ApiService {
  constructor(path) {
    super();
    this.path = path;
  }

  setAuthHeader() {
    const token = JwtService.getToken();
    axios.defaults.headers.common["Authorization"] = token
      ? `Bearer ${token}`
      : "";
  }

  login(params) {
    return this.$post(`${this.path}/login`, params);
  }

  logout() {
    return this.$delete(`${this.path}/logout`);
  }

  async whoami() {
    return this.$get(`${this.path}/whoAmI`);
  }
}
