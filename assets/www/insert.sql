insert into users values(1, 'John','Wayne', 'password', 'admin@mail.com', true, null, '06641233211', 'imglink', 'erste1','erste');
insert into users values(2, 'Max','Muster', 'password', 'max@mail.com', true, 'Ich bin Informatiker','06741233211', 'imglink', 'erste2', 'erste');
insert into users values(3, 'Kein','ErsteKunde', 'password', 'kein@mail.com', false, null, '06741233211', 'imglink', null, 'bawag');


insert into ads values(3, 1,'Traumhaus3 Finanzieren', 500000, 0, 4.5, 'Ich möchte ein Haus bauen!', 120, '2017-04-30', 0, null, null);
insert into ads values(2, 1,'Traumhaus2 Finanzieren', 300000, 0, 4.5, 'Ich möchte ein Haus bauen!', 120, '2017-01-10', 1, 2, '2017-05-10');
insert into ads values(1, 1,'Traumhaus1 Finanzieren', 600000, 0, 4.5, 'Ich möchte ein Haus bauen!', 120, '2001-05-10', 2, 2, '2002-06-10');

insert into favs values(1, 2, 3);
insert into favs values(2, 2, 2);
insert into favs values(3, 2, 1);

insert into bankaccounts values(1, '1', 'erste', 1500);
insert into bankaccounts values(2, '2', 'erste', 2000000);

insert into accountmovements values(1, 'bawag3', 'erste1', 'bawagbic', 'erste', 2000, '2017-04-30');
insert into accountmovements values(2, 'bawag3', 'erste1', 'bawagbic', 'erste', -1500, '2017-05-01');
insert into accountmovements values(3, 'bawag3', 'erste1', 'bawagbic', 'erste', 2000, '2017-03-30');
insert into accountmovements values(4, 'bawag3', 'erste1', 'bawagbic', 'erste', -1500, '2017-04-01');
insert into accountmovements values(5, 'bawag3', 'erste1', 'bawagbic', 'erste', 2000, '2017-02-25');
insert into accountmovements values(6, 'bawag3', 'erste1', 'bawagbic', 'erste', -1500, '2017-03-01');
insert into accountmovements values(7, 'bawag4', 'erste2', 'bawagbic', 'erste', 20000, '2017-04-30');
insert into accountmovements values(8, 'bawag4', 'erste2', 'bawagbic', 'erste', 20000, '2017-03-30');
insert into accountmovements values(9, 'bawag4', 'erste2', 'bawagbic', 'erste', 20000, '2017-02-25');