drop table if exists accountmovements;
drop table if exists bankaccounts;
drop table if exists favs;
drop table if exists ads;
drop table if exists users;
    
create table users(
	user_id integer primary key not null auto_increment,
	user_firstname varchar(60) not null,
	user_lastname varchar (60) not null,
	user_password varchar(60) not null, 
	user_email varchar(30) not null, 
	user_enabled boolean not null,
	user_creditscore double,
	user_comment varchar(600),
	user_tel varchar(30),
	user_img varchar(120),
	user_iban varchar(30)
);

create table ads(
	ad_id integer primary key not null auto_increment,
	ad_creator_id integer not null,
	ad_title varchar(80) not null,
	ad_amount double not null,
	ad_rate double not null,
	ad_description varchar (600) not null,
	ad_runningtime integer not null,
	ad_creation_date timestamp not null,
	ad_status integer not null,
	ad_investor_id integer,
	ad_investment_date timestamp,
	
	constraint fk_ad_creator_id foreign key(ad_creator_id) references users(user_id) on delete cascade,
	constraint fk_ad_investor_id foreign key(ad_investor_id) references users(user_id) on delete cascade
);

create table favs(
	fav_id integer primary key not null auto_increment,
	fav_user_id integer not null,
	fav_ad_id integer not null,
	
	constraint fk_fav_user_id foreign key(fav_user_id) references users(user_id) on delete cascade,
	constraint fk_fav_ad_id foreign key(fav_ad_id) references ads(ad_id) on delete cascade
);

create table bankaccounts(
	bankaccount_id integer primary key not null auto_increment,
	bankaccount_iban varchar(30) unique not null,
	bankaccount_balance double not null
);	

create table accountmovements(
	accountmovement_id integer primary key not null auto_increment,
	accountmovement_sender_iban varchar(30) not null,
	accountmovement_reciever_iban varchar(30) not null,
	accountmovement_amount double not null,
	accountmovement_date timestamp not null
);
