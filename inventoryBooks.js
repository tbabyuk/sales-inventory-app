class Book {
  constructor(title, price, tax, quantity) {
    this.title = title;
    this.price = price;
    this.tax = tax;
    this.quantity = quantity;
    }
}


const abc1 = new Book('ABC of Piano Playing (Book 1)', 14.95, 0.05, 10);
const abc2 = new Book('ABC of Piano Playing (Book 2)', 14.95, 0.05, 10);
const abc3 = new Book('ABC of Piano Playing (Book 3)', 14.95, 0.05, 11);

const rcm_piano_prep_a = new Book('RCM Prep A Piano - Repertoire', 19.95, 0.05, 0);
const rcm_piano_prep_a_old = new Book('RCM Prep A Piano - Repertoire (old)', 19.95, 0.05, 0);
const rcm_piano_prep_b = new Book('RCM Prep B Piano - Repertoire', 19.95, 0.05, 1);
const rcm_piano_prep_b_old = new Book('RCM Prep B Piano - Repertoire (old)', 19.95, 0.05, 0);

const rcm_piano_1_tech = new Book('RCM Level 1 Piano - Technical requirements', 11.95, 0.05, 11);
const rcm_piano_1_rep = new Book('RCM Level 1 Piano - Repertoire', 20.95, 0.05, 5);
const rcm_piano_1_rep_old = new Book('RCM Level 1 Piano - Repertoire (old)', 20.95, 0.05, 1);
const rcm_piano_1_etu = new Book('RCM Level 1 Piano - Etudes', 15.95, 0.05, 5);
const rcm_piano_1_etu_old = new Book('RCM Level 1 Piano - Etudes (old)', 15.95, 0.05, 2);
const rcm_piano_1_sight = new Book('RCM Level 1 Piano - Sight Reading & Ear Tests', 17.95, 0.05, 7);
const rcm_1_theory = new Book('RCM Level 1 - Theory', 19.95, 0.05, 8);

const rcm_piano_2_tech = new Book('RCM Level 2 Piano - Technical requirements', 12.95, 0.05, 5);
const rcm_piano_2_rep = new Book('RCM Level 2 Piano - Repertoire', 20.95, 0.05, 4);
const rcm_piano_2_rep_old = new Book('RCM Level 2 Piano - Repertoire (old)', 20.95, 0.05, 1);
const rcm_piano_2_etu = new Book('RCM Level 2 Piano - Etudes', 15.95, 0.05, 4);
const rcm_piano_2_etu_old = new Book('RCM Level 2 Piano - Etudes', 15.95, 0.05, 2);
const rcm_piano_2_sight = new Book('RCM Level 2 Piano - Sight Reading & Ear Tests', 17.95, 0.05, 5);
const rcm_2_theory = new Book('RCM Level 2 - Theory', 19.95, 0.05, 7);

const rcm_piano_3_tech = new Book('RCM Level 3 Piano - Technical requirements', 12.95, 0.05, 5);
const rcm_piano_3_rep = new Book('RCM Level 3 Piano - Repertoire', 20.95, 0.05, 4);
const rcm_piano_3_rep_old = new Book('RCM Level 3 Piano - Repertoire (old)', 20.95, 0.05, 1);
const rcm_piano_3_etu = new Book('RCM Level 3 Piano - Etudes', 15.95, 0.05, 4);
const rcm_piano_3_etu_old = new Book('RCM Level 3 Piano - Etudes (old)', 15.95, 0.05, 1);
const rcm_piano_3_sight = new Book('RCM Level 3 Piano - Sight Reading & Ear Tests', 17.95, 0.05, 5);
const rcm_3_theory = new Book('RCM Level 3 - Theory', 19.95, 0.05, 6);

const rcm_piano_4_tech = new Book('RCM Level 4 Piano - Technical requirements', 12.95, 0.05, 6);
const rcm_piano_4_rep = new Book('RCM Level 4 Piano - Repertoire', 20.95, 0.05, 4);
const rcm_piano_4_rep_old = new Book('RCM Level 4 Piano - Repertoire (old)', 20.95, 0.05, 2);
const rcm_piano_4_etu = new Book('RCM Level 4 Piano - Etudes', 15.95, 0.05, 4);
const rcm_piano_4_etu_old = new Book('RCM Level 4 Piano - Etudes (old)', 15.95, 0.05, 3);
const rcm_piano_4_sight = new Book('RCM Level 4 Piano - Sight Reading & Ear Tests', 17.95, 0.05, 6);
const rcm_4_theory = new Book('RCM Level 4 - Theory', 21.95, 0.05, 4);

const rcm_piano_5_tech = new Book('RCM Level 5 Piano - Technical requirements', 13.95, 0.05, 3);
const rcm_piano_5_rep = new Book('RCM Level 5 Piano - Repertoire', 21.95, 0.05, 3);
const rcm_piano_5_etu = new Book('RCM Level 5 Piano - Etudes', 15.95, 0.05, 3);
const rcm_piano_5_sight = new Book('RCM Level 5 Piano - Sight Reading & Ear Tests', 21.95, 0.05, 3);
const rcm_5_theory = new Book('RCM Level 5 - Theory', 21.95, 0.05, 4);

const rcm_piano_6_tech = new Book('RCM Level 6 Piano - Technical requirements', 14.95, 0.05, 3);
const rcm_piano_6_rep = new Book('RCM Level 6 Piano - Repertoire', 23.95, 0.05, 2);
const rcm_piano_6_etu = new Book('RCM Level 6 Piano - Etudes', 16.95, 0.05, 2);
const rcm_piano_6_sight = new Book('RCM Level 6 Piano - Sight Reading & Ear Tests', 21.95, 0.05, 2);
const rcm_6_theory = new Book('RCM Level 6 - Theory', 21.95, 0.05, 3);

const rcm_piano_7_tech = new Book('RCM Level 7 Piano - Technical requirements', 15.95, 0.05, 0);
const rcm_piano_7_rep = new Book('RCM Level 7 Piano - Repertoire', 23.95, 0.05, 1);
const rcm_piano_7_etu = new Book('RCM Level 7 Piano - Etudes', 16.95, 0.05, 1);
const rcm_piano_7_sight = new Book('RCM Level 7 Piano - Sight Reading & Ear Tests', 21.95, 0.05, 1);
const rcm_7_theory = new Book('RCM Level 7 - Theory', 21.95, 0.05, 1);

const rcm_piano_8_tech = new Book('RCM Level 8 Piano - Technical requirements', 16.95, 0.05, 1);
const rcm_piano_8_rep = new Book('RCM Level 8 Piano - Repertoire', 26.95, 0.05, 1);
const rcm_piano_8_etu = new Book('RCM Level 8 Piano - Etudes', 19.95, 0.05, 1);
const rcm_piano_8_sight = new Book('RCM Level 8 Piano - Sight Reading & Ear Tests', 21.95, 0.05, 1);
const rcm_8_theory = new Book('RCM Level 8 - Theory', 28.95, 0.05, 1);

const rcm_piano_9_tech = new Book('RCM Level 9 Piano - Technical requirements', 16.95, 0.05, 0);
const rcm_piano_9_rep = new Book('RCM Level 9 Piano - Repertoire', 39.95, 0.05, 0);
const rcm_piano_9_etu = new Book('RCM Level 9 Piano - Etudes', 20.95, 0.05, 0);
const rcm_piano_9_sight = new Book('RCM Level 9 Piano - Sight Reading & Ear Tests', 21.95, 0.05, 0);

const rcm_piano_10_tech = new Book('RCM Level 10 Piano - Technical requirements', 16.95, 0.05, 0);
const rcm_piano_10_rep = new Book('RCM Level 10 Piano - Repertoire', 43.95, 0.05, 0);
const rcm_piano_10_etu = new Book('RCM Level 10 Piano - Etudes', 21.95, 0.05, 0);
const rcm_piano_10_sight = new Book('RCM Level 10 Piano - Sight Reading & Ear Tests', 21.95, 0.05, 0);

export const booksArray = [
  abc1,
  abc2,
  abc3,
  rcm_piano_prep_a,
  rcm_piano_prep_a_old,
  rcm_piano_prep_b,
  rcm_piano_prep_b_old,
  rcm_piano_1_tech,
  rcm_piano_1_rep,
  rcm_piano_1_rep_old,
  rcm_piano_1_etu,
  rcm_piano_1_etu_old,
  rcm_piano_1_sight,
  rcm_1_theory,
  rcm_piano_2_tech,
  rcm_piano_2_rep,
  rcm_piano_2_rep_old,
  rcm_piano_2_etu,
  rcm_piano_2_etu_old,
  rcm_piano_2_sight,
  rcm_2_theory,
  rcm_piano_3_tech,
  rcm_piano_3_rep,
  rcm_piano_3_rep_old,
  rcm_piano_3_etu,
  rcm_piano_3_etu_old,
  rcm_piano_3_sight,
  rcm_3_theory,
  rcm_piano_4_tech,
  rcm_piano_4_rep,
  rcm_piano_4_rep_old,
  rcm_piano_4_etu,
  rcm_piano_4_etu_old,
  rcm_piano_4_sight,
  rcm_4_theory,
  rcm_piano_5_tech,
  rcm_piano_5_rep,
  rcm_piano_5_etu,
  rcm_piano_5_sight,
  rcm_5_theory,
  rcm_piano_6_tech,
  rcm_piano_6_rep,
  rcm_piano_6_etu,
  rcm_piano_6_sight,
  rcm_6_theory,
  rcm_piano_7_tech,
  rcm_piano_7_rep,
  rcm_piano_7_etu,
  rcm_piano_7_sight,
  rcm_7_theory,
  rcm_piano_8_tech,
  rcm_piano_8_rep,
  rcm_piano_8_etu,
  rcm_piano_8_sight,
  rcm_8_theory,
  rcm_piano_9_tech,
  rcm_piano_9_rep,
  rcm_piano_9_etu,
  rcm_piano_9_sight,
  rcm_piano_10_tech,
  rcm_piano_10_rep,
  rcm_piano_10_etu,
  rcm_piano_10_sight,
];
