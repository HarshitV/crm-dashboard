import { rem } from "@/utils/rem";
import { Flex } from "@chakra-ui/react";
import React from "react";

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<
  React.PropsWithChildren,
  ErrorBoundaryState
> {
  constructor(props: React.PropsWithChildren) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <Flex
          h="100vh"
          justify="center"
          align="center"
          fontSize={rem(24)}
          role="alert"
          aria-live="assertive"
        >
          Oops something went wrong!
        </Flex>
      );
    }
    return this.props.children;
  }
}
