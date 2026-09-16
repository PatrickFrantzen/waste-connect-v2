import { Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { PassportStrategy } from "@nestjs/passport";
import { Model } from "mongoose";
import { ExtractJwt, Strategy } from "passport-jwt";
import { Benutzer, BenutzerDocument } from "src/schemas/user.schema";
import { JwtPayload } from "./jwt-payload.interface";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectModel(Benutzer.name) private benutzerModel: Model<Benutzer>,
    private configService: ConfigService
  ) {
    super({
      secretOrKey: configService.get("JWT_SECRET"),
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  async validate(payload: JwtPayload): Promise<BenutzerDocument> {
    const { _id } = payload;
    const user: BenutzerDocument = await this.benutzerModel.findOne({
      _id,
    });
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
