import React from 'react';
import { Heading, List, ListItem, Link } from 'spectacle';

const CustomLink = ({ href, children, ...props }) => (
  <Link href={href} target="_blank" {...props}>
    {children || href}
  </Link>
);

const Links = () => {
  return (
    <div>
      <Heading size={3} caps textColor="tertiary">
        Полезные ссылки
      </Heading>
      <List>
        <ListItem>
          <CustomLink href="https://ru.reactjs.org/docs/composition-vs-inheritance.html" />
        </ListItem>
        <ListItem>
          <CustomLink href="https://ru.reactjs.org/docs/higher-order-components.html" />
        </ListItem>
        <ListItem>
          <CustomLink href="https://ru.reactjs.org/docs/render-props.html" />
        </ListItem>
        <ListItem>
          <CustomLink href="https://habr.com/ru/post/309422" />
        </ListItem>
        <ListItem>
          <CustomLink href="https://youtu.be/YaZg8wg39QQ">
            https://youtu.be/YaZg8wg39QQ - React Component Patterns [EN]
          </CustomLink>
        </ListItem>
      </List>
    </div>
  );
};

export { Links };
