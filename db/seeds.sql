BEGIN;

INSERT INTO users (username, course, email, password, type) VALUES

  ('taka',
    'WDI60Zonkeys',
    'takataka@ga.edu',
    'ahrens',
    'type of thing? Open/Closed'
  );

INSERT INTO questions (username, votes, question_body, tag) VALUES

  ('taka',
    3,
    'what is this shit?',
    'tag of thing');

  COMMIT;

