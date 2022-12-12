/// <reference types="cypress-downloadfile"/>

describe('filedownload',function(){
    it('filedownloadtest',function(){
        cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','cypressdownload.jpg')

    })
})