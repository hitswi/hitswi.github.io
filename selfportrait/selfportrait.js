function setup() {
   createCanvas(600,600);
   noStroke();
}

function draw() {
//background
  background(246, 178, 188);

//colors
  tan = color(229, 187, 172);
  brownblack = color(87, 62, 76);
  hairs = color(158, 126, 135);
  clothings = color(0);
  peters = color(255);
  blushes = color(221, 154, 147);
  highlights = color(210, 172, 182);
  shades = color(226, 160, 186);
  shades2 = color(103, 82, 94);
  
//hair (front)
  fill(hairs);
  beginShape();
  vertex(208,116);
  vertex(197,148);
  vertex(197,190);
  vertex(222,231);
  vertex(251,257);
  vertex(236,215);
  vertex(266,241);
  vertex(304,256);
  vertex(343,266);
  vertex(386,266);
  vertex(390,261);
  vertex(401,279);
  vertex(408,300);
  vertex(403,245);
  vertex(398,219);
  vertex(373,156);
  vertex(325,122);
  vertex(275,104);
  vertex(230,105);
  endShape(CLOSE);
  
//hair (back)
  fill(hairs);
  beginShape();
  vertex(219,100);
  vertex(199,105);
  vertex(169,127);
  vertex(138,185);
  vertex(138,315);
  vertex(131,425);
  vertex(137,460);
  vertex(170,505);
  vertex(166,467);
  vertex(181,494);
  vertex(206,501);
  vertex(186,455);
  vertex(210,478);
  vertex(224,482);
  vertex(208,447);
  vertex(226,462);
  vertex(248,475);
  vertex(221,412);
  vertex(234,437);
  vertex(259,463);
  vertex(253,425);
  vertex(262,428);
  vertex(269,446);
  vertex(273,453);
  vertex(274,432);
  vertex(290,435);
  vertex(315,435);
  vertex(335,432);
  vertex(333,454);
  vertex(352,422);
  vertex(353,437);
  vertex(351,464);
  vertex(372,414);
  vertex(377,412);
  vertex(377,441);
  vertex(366,477);
  vertex(398,438);
  vertex(409,384);
  vertex(392,463);
  vertex(381,477);
  vertex(412,458);
  vertex(398,493);
  vertex(418,486);
  vertex(434,464);
  vertex(432,495);
  vertex(427,504);
  vertex(452,478);
  vertex(468,407);
  vertex(465,237);
  vertex(457,179);
  vertex(420,109);
  vertex(380,88);
  vertex(310,72);
  vertex(265,80);
  vertex(230,91);
  endShape(CLOSE);

//backhair shade
  fill(shades2);
  beginShape();
  vertex(177,336);
  vertex(181,368);
  vertex(203,438);
  vertex(211,453);
  vertex(235,472);
  vertex(249,475);
  vertex(248,470);
  vertex(233,447);
  vertex(222,411);
  vertex(234,436);
  vertex(259,463);
  vertex(255,443);
  vertex(253,425);
  vertex(261,429);
  vertex(272,452);
  vertex(273,431);
  vertex(334,430);
  vertex(332,446);
  vertex(333,457);
  vertex(352,423);
  vertex(352,442);
  vertex(348,464);
  vertex(368,432);
  vertex(374,412);
  vertex(377,432);
  vertex(371,465);
  vertex(365,477);
  vertex(393,442);
  vertex(403,422);
  vertex(409,390);
  vertex(409,340);
  endShape();
  
//highlight (hair)
  fill(highlights);
  beginShape();
  vertex(169,129);
  vertex(181,138);
  vertex(259,156);
  vertex(190,148);
  vertex(150,167);
  endShape();

//ear (left)
  fill(255);
  beginShape();
  vertex(141,25);
  vertex(133,42);
  vertex(135,73);
  vertex(151,100);
  vertex(164,116);
  vertex(185,124);
  vertex(200,130);
  vertex(207,125);
  vertex(202,106);
  vertex(192,80);
  vertex(167,38);
  vertex(153,25);
  endShape(CLOSE);

//ear (right)
  fill(255);
  beginShape();
  vertex(395,113);
  vertex(405,88);
  vertex(423,56);
  vertex(442,29);
  vertex(455,24);
  vertex(464,32);
  vertex(468,48);
  vertex(462,86);
  vertex(446,107);
  vertex(421,122);
  vertex(404,133);
  endShape(CLOSE);


//clothing
  fill(clothings);
  beginShape();
  vertex(273,455);
  vertex(245,479);
  vertex(208,500);
  vertex(158,518);
  vertex(106,540);
  vertex(87,569);
  vertex(77,599);
  vertex(527,598);
  vertex(509,552);
  vertex(478,527);
  vertex(408,505);
  vertex(365,480);
  vertex(348,467);
  vertex(332,455);
  endShape();
  
//peter pan
  fill(peters);
  beginShape();
  vertex(270,455);
  vertex(257,465);
  vertex(244,491);
  vertex(248,517);
  vertex(259,527);
  vertex(282,534);
  vertex(299,523);
  vertex(302,497);
  vertex(304,521);
  vertex(326,532);
  vertex(345,526);
  vertex(357,515);
  vertex(358,492);
  vertex(344,467);
  vertex(333,455);
  endShape();
  
//neck
  fill(tan);
  beginShape();
  vertex(271,425);
  vertex(272,452);
  vertex(278,477);
  vertex(288,491);
  vertex(300,500);
  vertex(314,495);
  vertex(330,472);
  vertex(333,455);
  vertex(332,434);
  vertex(334,424);
  endShape();
  
//shade (neck)
  fill(shades);
  beginShape();
  vertex(272,430);
  vertex(283,445);
  vertex(305,462);
  vertex(328,462);
  vertex(333,456);
  vertex(332,444);
  vertex(334,430);
  vertex(325,429);
  vertex(310,428);
  vertex(287,428);
  endShape();
  
//face
  fill(tan);
  beginShape();
  vertex(176,329);
  vertex(183,345);
  vertex(195,369);
  vertex(205,391);
  vertex(220,404);
  vertex(237,416);
  vertex(269,431);
  vertex(295,436);
  vertex(323,432);
  vertex(347,424);
  vertex(370,414);
  vertex(392,399);
  vertex(403,385);
  vertex(409,369);
  vertex(409,345);
  vertex(408,326);
  vertex(410,298);
  vertex(404,288);
  vertex(393,271);
  vertex(390,265);
  vertex(373,267);
  vertex(342,266);
  vertex(315,257);
  vertex(292,255);
  vertex(272,243);
  vertex(255,234);
  vertex(237,221);
  vertex(240,231);
  vertex(246,243);
  vertex(250,254);
  vertex(240,251);
  vertex(229,241);
  vertex(215,229);
  vertex(206,212);
  vertex(199,197);
  vertex(196,173);
  vertex(195,160);
  vertex(188,179);
  vertex(182,199);
  vertex(178,222);
  vertex(175,246);
  vertex(173,270);
  vertex(172,303);
  endShape(CLOSE);

//shade (nose);
  fill(shades);
  beginShape();
  vertex(290,341);
  vertex(305,331);
  vertex(320,341);
  endShape(CLOSE);
  
//blush (left)
  fill(blushes);
  ellipse(228,366,21);

//blush (right)
  fill(blushes);
  ellipse(379,367,20);

//left eyes
  fill(brownblack);
  beginShape();
  vertex(179,314);
  vertex(195,311);
  vertex(210,288);
  vertex(217,320);
  vertex(229,334);
  vertex(243,336);
  vertex(256,332);
  vertex(261,320);
  vertex(260,290);
  vertex(250,276);
  vertex(264,275);
  vertex(251,265);
  vertex(240,261);
  vertex(221,266);
  vertex(211,275);
  endShape();
  
//left pupil
  fill(255);
  beginShape();
  ellipse(233,284,9);
  
//right eyes
  fill(brownblack);
  beginShape();
  vertex(338,278);
  vertex(343,281);
  vertex(356,274);
  vertex(347,296);
  vertex(347,325);
  vertex(360,336);
  vertex(371,336);
  vertex(383,328);
  vertex(392,310);
  vertex(392,287);
  vertex(389,275);
  vertex(398,283);
  vertex(404,298);
  vertex(410,314);
  vertex(426,314);
  vertex(415,305);
  vertex(405,283);
  vertex(392,265);
  vertex(368,259);
  vertex(348,266);
  endShape(CLOSE);
  
//right pupil
  fill(255);
  beginShape();
  ellipse(370,282,9);
  
  
//left brows
  fill(brownblack);
  beginShape();
  vertex(180,256);
  vertex(200,232);
  vertex(226,214);
  vertex(246,213);
  endShape();
  
//mouth
  fill(brownblack);
  beginShape();
  vertex(273,373);
  vertex(279,378);
  vertex(286,382);
  vertex(301,377);
  vertex(308,380);
  vertex(317,383);
  vertex(327,377);
  vertex(327,370);
  vertex(317,376);
  vertex(305,372);
  vertex(294,375);
  vertex(285,377);
  endShape(CLOSE);
  
}
