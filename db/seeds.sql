BEGIN;

INSERT INTO users (username, course, email, password, type) VALUES

  ('synclair', 'wholphins', 'synclair@synclair.com', 'password', 'student'),
  ('taka', 'zonkeys', 'takataka@ga.edu', 'ahrens', 'student'),
  ('natty', 'wholphins', 'nattyd@ga.edu', 'davis', 'student'),
  ('mike', 'zonkeys', 'mikec@ga.edu', 'mikecohenpassword', 'student');

INSERT INTO questions (username, votes, question_title, question_body, question_tags) VALUES

  ('taka', 3, 'question about position: relative', 'what is this shit?', 'css'),
  ('synclair', 1, 'How do i use flexbox?', 'flexbox flexbox flexbox', 'flexbox, css, html'),
  ('natty', 6, 'What is react used for', 'Why can I not use something else other than react?', 'react');

COMMIT;

