
let contacts = [
    {
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
    }, 
    {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
    }, 
    {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
    }
];

// write your code here

    let UserContact = window.prompt("Enter your name");
    let contact = UserContact;
    let phone1= window.prompt("Enter your phone");
    let phone = phone1;
    let email1= window.prompt("Enter your email");
    let email = email1;

    alert(`${contact} / ${phone} / ${email}`);

    contacts.name = contact;
    contacts.phone = phone;
    contacts.email = email;
    
    contacts.push(contacts.name, contacts.phone, contacts.email);
    let last = contacts.length - 1;
    alert(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
 