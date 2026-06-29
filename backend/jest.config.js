export default {
  testEnvironment: "node",

  reporters: [
    "default",
    [
      "jest-html-reporters",
      {
        publicPath: "../docs/reports",
        filename: "report.html",
        pageTitle: "Relatório de Testes - Açaí Story",
        expand: true
      }
    ]
  ]
};