import puppeteer from 'puppeteer'
import MaterialService from './materialService.js'
import { inject } from '@adonisjs/core'
import PrinterService from './printerService.js'

interface QuoteData {
    printer: string
    material: string
    totalMaterialCost: number
    printTime: number
    electricityCost: number
    cleaningCost: number
    totalCost: number
}

@inject()
export default class QuoteService {
  constructor(private materialService: MaterialService, private printerService: PrinterService) {}

  async generatePdf(data: QuoteData): Promise<Buffer> {
    const date = new Date().toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })

    const material = await this.materialService.getMaterialById(data.material)
    const printer = await this.printerService.getPrinterById(data.printer)

    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    const htmlContent = `
      <!DOCTYPE html>
      <html lang="fr">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Devis N°${date}</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            color: #333;
          }
          .container {
            width: 80%;
            margin: 20px auto;
            background: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
          .header,
          .footer {
            text-align: center;
            margin-bottom: 20px;
          }
          .header h1 {
            margin: 0;
          }
          .details,
          .summary {
            margin-bottom: 20px;
          }
          .details table,
          .summary table {
            width: 100%;
            border-collapse: collapse;
          }
          .details th,
          .details td,
          .summary th,
          .summary td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
          }
          .summary th {
            background-color: #f2f2f2;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Devis N°2</h1>
            <p>JUNIA / Fablab</p>
            <p>5 Rue Norbert Segard, 59800 Lille</p>
            <p>Siret : <span>&lt;à compléter&gt;</span> | N° TVA : <span>&lt;à compléter&gt;</span></p>
            <p>Tél : <span>&lt;à compléter&gt;</span></p>
          </div>

          <div class="details">
            <p>41 Bd Vauban, 59800 Lille</p>
            <p>Siret : <span>&lt;à compléter&gt;</span> | Tél : <span>&lt;à compléter&gt;</span></p>
          </div>

          <div class="summary">
            <h3>Détails</h3>
            <p>Imprimante : ${printer.name}</p>
            <table>
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Quantité</th>
                  <th>Unité</th>
                  <th>Prix unitaire HT</th>
                  <th>Prix total HT</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>${material.name}</td> <!-- Matériau -->
                  <td>${(data.totalMaterialCost / material.grammePrize).toFixed(2)}</td> <!-- Quantité -->
                  <td>g</td>
                  <td>${(material.grammePrize).toFixed(2)} €</td> <!-- Prix unitaire HT -->
                  <td>${data.totalMaterialCost.toFixed(2)} €</td> <!-- Prix total HT -->
                </tr>
                <tr>
                  <td>Estimation temps d'impression</td>
                  <td>${(data.printTime / 3600).toFixed(2)}</td> <!-- Quantité -->
                  <td>h</td>
                  <td>${printer.impressingCost.toFixed(2)} €</td> <!-- Prix unitaire HT -->
                  <td>${data.electricityCost.toFixed(2)} €</td> <!-- Prix total HT -->
                </tr>
                <tr>
                  <td>Préparation et post-traitement</td>
                  <td>1</td>
                  <td>-</td>
                  <td>${data.cleaningCost.toFixed(2)} €</td>
                  <td>${data.cleaningCost.toFixed(2)} €</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="summary">
            <h3>Résumé</h3>
            <table>
              <tbody>
                <tr>
                  <th>Total HT</th>
                  <td>${(data.totalCost * 0.80).toFixed(2)} €</td>
                </tr>
                <tr>
                  <th>TVA (20%)</th>
                  <td>${(data.totalCost * 0.20).toFixed(2)} €</td>
                </tr>
                <tr>
                  <th>Total TTC</th>
                  <td>${data.totalCost.toFixed(2)} €</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="footer">
            <p>Date du devis : ${date}</p>
          </div>
        </div>
      </body>
      </html>
    `

    await page.setContent(htmlContent)
    const pdfBuffer = Buffer.from(await page.pdf({ format: 'A4' }))

    await browser.close()

    return pdfBuffer
  }
}
