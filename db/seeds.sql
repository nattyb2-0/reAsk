BEGIN;

INSERT INTO users (username, course, email, password, type) VALUES

  ('taka', 'WDI60Zonkeys', 'takataka@ga.edu', 'ahrens', 'student'),
  ('natty', 'WDI60Wholphins', 'nattyd@ga.edu', 'davis', 'student'),
  ('trevor', 'WDI60Zonkeys', 'trevorp@ga.edu', 'preston', 'teacher');

INSERT INTO questions (username, votes, question_title, question_body, tag) VALUES

  ('taka', 3, 'question about position: relative', 'what is this shit?', 'css')
  ('natty', 6, 'What is react used for','Why can\'t i use something else other than react?', 'react');

COMMIT;

