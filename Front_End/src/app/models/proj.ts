export class Projet {

    public clientId: String;
    public contratType: String;
    public name: String;
    public designation: String;
    public numPoint: String;


    constructor(clientId: String, contratType: String, name: String, designation: String, numPoint: String) {
        this.clientId = clientId;
        this.contratType = contratType;
        this.name = name;
        this.designation = designation;
        this.numPoint = numPoint;
    }
   


}