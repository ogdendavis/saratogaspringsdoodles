import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.aside`
  margin-left: 1rem;
`;

const SidebarContent = styled.section`
  padding: 2em;
  color: white;
  width: 260px;
  background: ${props => props.theme.headFootTransparent};
  border-radius: ${props => props.theme.borderRadius};
`;

const Sidebar = ({ section }) => {
  return (
    <SidebarContainer>
      <SidebarContent>
        <div>I am a sidebar!</div>
        <p>
          I will eventually have links to relevant content related to this page
        </p>
      </SidebarContent>
    </SidebarContainer>
  );
};

export default Sidebar;
