BEGIN;

INSERT INTO users (username, course, email, password, type) VALUES

  ('taka',
    'WDI60Zonkeys',
    'takataka@ga.edu',
    'ahrens',
    'student'
  ),

  ('natty',
    'WDI60Wholphins',
    'nattyd@ga.edu',
    'davis',
    'student'
  ),

  ('trevor',
    'WDI60Zonkeys',
    'trevorp@ga.edu',
    'teacher'
    );

INSERT INTO questions (username, votes, question_body, tag) VALUES

  ('taka',
    3,
    'what is this shit?',
    'css')

  ('natty',
    6,
    'who are these people',
    'react');

  COMMIT;

