import styled from "@emotion/styled";

import MainLayout from "@/layouts/MainLayout";
import Button from "@/components/Button";

const StyledButton = styled(Button)`
  padding: 32px
`

const LandingPage = () => {
  return (
    <MainLayout>
      <>
        <h1>Landing Page</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta dolorum aspernatur incidunt nisi eos! Voluptates dolores quas natus amet corporis ratione iure. Delectus molestias ad, deleniti nisi iste quisquam quas consequatur animi. Esse laudantium quis, accusantium quidem rerum eveniet molestiae? Quisquam, voluptate aperiam! Tenetur temporibus vero necessitatibus, corrupti quas eius blanditiis quibusdam sunt aut, voluptatem magni dolorem dolore facilis quae fugiat eos labore odit nemo, consectetur repudiandae? Sit consequatur dolorem nam voluptas aperiam cumque cum ullam sint aliquam aut. Possimus quaerat illo corrupti illum error corporis alias nobis magnam ea repellat harum earum omnis reprehenderit itaque, odit beatae labore dolore.</p>
        <StyledButton type="primary">ass</StyledButton>
      </>
    </MainLayout>
  )
}

export default LandingPage;