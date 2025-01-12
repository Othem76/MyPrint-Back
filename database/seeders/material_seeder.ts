import { BaseSeeder } from "@adonisjs/lucid/seeders";
import Material from "#models/material/material";

export default class MaterialSeeder extends BaseSeeder {
  public async run() {
    await Material.createMany([
      {
        name: "ABS X130 apple green",
        curaPrinterName: "ABS X130 apple green",
        grammePrize: 0.2245,
        diameter: 1.75,
        color: "apple green",
        impressingType: 1,
      },
      {
        name: "ABS X130 Blue",
        curaPrinterName: "ABS X130 Blue",
        grammePrize: 0.2245,
        diameter: 1.75,
        color: "blue",
        impressingType: 1,
      },
      {
        name: "ABS X130 red",
        curaPrinterName: "ABS X130 red",
        grammePrize: 0.2245,
        diameter: 1.75,
        color: "red",
        impressingType: 1,
      },
      {
        name: "ABS X130 yellow",
        curaPrinterName: "ABS X130 yellow",
        grammePrize: 0.2245,
        diameter: 1.75,
        color: "yellow",
        impressingType: 1,
      },
      {
        name: "TPU92",
        curaPrinterName: "TPU92",
        grammePrize: 0.2712,
        diameter: 1.75,
        color: null,
        impressingType: 1,
      },
      {
        name: "Innofil ABS Fusion + Naturel Ø 1,75 mm",
        curaPrinterName: "Innofil ABS Fusion + Naturel Ø 1,75 mm",
        grammePrize: 0.078,
        diameter: 1.75,
        color: "naturel",
        impressingType: 11,
      },
      {
        name: "Innofil ABS Silver Ø 1,75 mm",
        curaPrinterName: "Innofil ABS Silver Ø 1,75 mm",
        grammePrize: 0.0404,
        diameter: 1.75,
        color: "silver",
        impressingType: 11,
      },
      {
        name: "Innofil ASA Ø 1,75 mm",
        curaPrinterName: "Innofil ASA Ø 1,75 mm",
        grammePrize: 0.0553,
        diameter: 1.75,
        color: null,
        impressingType: 11,
      },
      {
        name: "Innofil EPR PET White Ø 1,75 mm",
        curaPrinterName: "Innofil EPR PET White Ø 1,75 mm",
        grammePrize: 0.046,
        diameter: 1.75,
        color: "white",
        impressingType: 11,
      },
      {
        name: "Innofil PLA BLACK Ø 1,75 mm",
        curaPrinterName: "Innofil PLA BLACK Ø 1,75 mm",
        grammePrize: 0.044,
        diameter: 1.75,
        color: "black",
        impressingType: 1,
      },
      {
        name: "Innofil PLA WHITE Ø 1,75 mm",
        curaPrinterName: "Innofil PLA WHITE Ø 1,75 mm",
        grammePrize: 0.044,
        diameter: 1.75,
        color: "white",
        impressingType: 1,
      },
      {
        name: "Innofil PLA YELLOW Ø 1,75 mm",
        curaPrinterName: "Innofil PLA YELLOW Ø 1,75 mm",
        grammePrize: 0.0413,
        diameter: 1.75,
        color: "yellow",
        impressingType: 1,
      },
      {
        name: "Innofil PP White Ø 1,75 mm",
        curaPrinterName: "Innofil PP White Ø 1,75 mm",
        grammePrize: 0.0743,
        diameter: 1.75,
        color: "white",
        impressingType: 11,
      },
      {
        name: "Innoflex 45 Black Ø 1,75 mm",
        curaPrinterName: "Innoflex 45 Black Ø 1,75 mm",
        grammePrize: 0.076,
        diameter: 1.75,
        color: "black",
        impressingType: 11,
      },
      {
        name: "MODELE ABS PLUS ivoire",
        curaPrinterName: "MODELE ABS PLUS ivoire",
        grammePrize: 0.4277,
        diameter: null,
        color: "ivoire",
        impressingType: 5,
      },
      {
        name: "MODELE AGILUS",
        curaPrinterName: "MODELE AGILUS",
        grammePrize: 0.45,
        diameter: null,
        color: null,
        impressingType: 5,
      },
      {
        name: "MODELE DURUS",
        curaPrinterName: "MODELE DURUS",
        grammePrize: 0.4,
        diameter: null,
        color: null,
        impressingType: 5,
      },
      {
        name: "MODELE TANGOBLACKPLUS",
        curaPrinterName: "MODELE TANGOBLACKPLUS",
        grammePrize: 0.45,
        diameter: null,
        color: "black",
        impressingType: 5,
      },
      {
        name: "MODELE TANGOGREY",
        curaPrinterName: "MODELE TANGOGREY",
        grammePrize: 0.45,
        diameter: null,
        color: "grey",
        impressingType: 5,
      },
      {
        name: "MODELE VERO CYAN",
        curaPrinterName: "MODELE VERO CYAN",
        grammePrize: 0.34,
        diameter: null,
        color: "cyan",
        impressingType: 5,
      },
      {
        name: "MODELE VERO MAGENTA",
        curaPrinterName: "MODELE VERO MAGENTA",
        grammePrize: 0.34,
        diameter: null,
        color: "magenta",
        impressingType: 5,
      },
      {
        name: "MODELE VERO YELLOW",
        curaPrinterName: "MODELE VERO YELLOW",
        grammePrize: 0.34,
        diameter: null,
        color: "yellow",
        impressingType: 5,
      },
      {
        name: "MODELE VEROWHITE PLUS RGD835",
        curaPrinterName: "MODELE VEROWHITE PLUS RGD835",
        grammePrize: 0.2583,
        diameter: null,
        color: "white",
        impressingType: 5,
      },
      {
        name: "Renkforce PLA Blue Ø 1,75 mm",
        curaPrinterName: "Renkforce PLA Blue Ø 1,75 mm",
        grammePrize: 0.034,
        diameter: 1.75,
        color: "blue",
        impressingType: 1,
      },
      {
        name: "Renkforce PLA RED Ø 1,75 mm",
        curaPrinterName: "Renkforce PLA RED Ø 1,75 mm",
        grammePrize: 0.034,
        diameter: 1.75,
        color: "red",
        impressingType: 1,
      },
      {
        name: "SUPPORT FULLCURE 705",
        curaPrinterName: "SUPPORT FULLCURE 705",
        grammePrize: 0.1347,
        diameter: 1.75,
        color: null,
        impressingType: 6,
      },
      {
        name: "SUPPORT PS400",
        curaPrinterName: "SUPPORT PS400",
        grammePrize: 0.4277,
        diameter: 1.75,
        color: null,
        impressingType: 6,
      },
      {
        name: "Verbatim PLA GREEN Ø 1,75 mm",
        curaPrinterName: "Verbatim PLA GREEN Ø 1,75 mm",
        grammePrize: 0.031,
        diameter: 1.75,
        color: "green",
        impressingType: 1,
      },
      {
        name: "Ultimaker PLA WHITE Ø 2,85 mm",
        curaPrinterName: "Ultimaker PLA WHITE Ø 2,85 mm",
        grammePrize: 0.044,
        diameter: 2.85,
        color: "white",
        impressingType: 1,
      },
      {
        name: "Ultimaker PLA RED Ø 2,85 mm",
        curaPrinterName: "Ultimaker PLA RED Ø 2,85 mm",
        grammePrize: 0.044,
        diameter: 2.85,
        color: "red",
        impressingType: 1,
      },
      {
        name: "Ultimaker PLA BLUE Ø 2,85 mm",
        curaPrinterName: "Ultimaker PLA BLUE Ø 2,85 mm",
        grammePrize: 0.0413,
        diameter: 2.85,
        color: "blue",
        impressingType: 1,
      },
      {
        name: "Ultimaker PLA GREEN Ø 2,85 mm",
        curaPrinterName: "Ultimaker PLA GREEN Ø 2,85 mm",
        grammePrize: 0.034,
        diameter: 2.85,
        color: "green",
        impressingType: 1,
      },
    ]);
  }
}
