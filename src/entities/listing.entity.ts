import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany
} from "typeorm";
import { User } from "./user.entity";
import { WestlandsAccount } from "./westlandsAccount.entity";

@Entity()
export class Listing {
  @PrimaryGeneratedColumn()
  public id: string;

  @CreateDateColumn()
  public createdDate: Date;

  @Column()
  public askingPrice: number;

  @Column()
  public totalVolume: number;

  @Column()
  public minimumVolume: number;

  @Column()
  public availableDate: Date;

  @ManyToOne(
    () => User,
    (user: User) => user.listings
  )
  public owner: User;

  @ManyToOne(
    () => WestlandsAccount,
    (westlandsAccount: WestlandsAccount) => westlandsAccount.listings
  )
  public westlandsAccount: WestlandsAccount;

  @OneToMany(
    () => OffscreenCanvas,
    (offer: Offer) => offer.listing
  )
  public offers: Offer[];
}
