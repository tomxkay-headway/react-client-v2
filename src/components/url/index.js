import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import IconButton from "@mui/material/IconButton";
import copy from "copy-to-clipboard";
import { checkValidUrl } from "../../utils/isValidUrl";

import { useQuery, useMutation, gql } from "@apollo/client";

const GET_ALL_LINKS = gql`
  query QueryLinks {
    allLinks {
      id
      url
      slug
    }
  }
`;

const CREATE_LINK = gql`
  mutation CreateLink($url: String!, $slug: String!) {
    createLink(url: $url, slug: $slug) {
      url
      slug
      id
    }
  }
`;

const Url = () => {
  const [url, setUrl] = useState("");
  const [slug, setSlug] = useState("");

  const {
    loading: queryLoading,
    error: queryError,
    data: queryData
  } = useQuery(GET_ALL_LINKS, {
    // fetchPolicy: "network-first",
    onCompleted: (data) => {
      console.log("on data query completed", data);
    },
    onError: (err) => {
      console.error("on data error ", err);
    }
  });

  const [createLink, { error: mutationError }] = useMutation(CREATE_LINK, {
    onCompleted: (data) => {
      console.log("data from mutation", data);

      reset();
    },
    onError: (error) => console.error("error from mutation", error),
    refetchQueries: [
      {
        query: GET_ALL_LINKS
      }
    ]
  });

  const reset = () => {
    setUrl("");
    setSlug("");
  };

  const handleShortenUrl = () => {
    // check if valid url
    const isValidUrl = checkValidUrl(url);

    if (!isValidUrl) {
      return alert(`${url} is not a valid url`);
    }

    createLink({ variables: { url, slug } });
  };

  return (
    <>
      <Box sx={{ background: "#263849", py: 5 }}>
        <Container>
          <Grid container justifyContent="center" spacing={1}>
            <Grid item xs={12} sm={12} md={8}>
              <Grid container spacing={1}>
                <Grid item xs={12} md={6}>
                  <TextField
                    sx={{ mr: 1, background: "#fff", height: "50px" }}
                    label=""
                    fullWidth={true}
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    variant="outlined"
                    placeholder="Make your links shorter"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    sx={{ background: "#fff", height: "50px" }}
                    label=""
                    fullWidth={true}
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                    variant="outlined"
                    placeholder="Custom slug"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Button
                fullWidth={true}
                sx={{ height: "50px" }}
                variant="contained"
                onClick={handleShortenUrl}
              >
                Shorten URL
              </Button>
            </Grid>
          </Grid>

          {queryError ? (
            <Typography align="center">{queryError.message}</Typography>
          ) : null}

          {mutationError ? (
            <Typography align="center">{mutationError.message}</Typography>
          ) : null}

          <Typography
            align="center"
            sx={{ mt: 2, color: "#fff" }}
            variant="body2"
          >
            By clicking shorten, you agree to Rebrandy's Terms of Use and
            Privacy Policy
          </Typography>
        </Container>
      </Box>

      <Container>
        <Box sx={{ my: 2 }}>
          {queryLoading ? (
            <Typography>Loading...</Typography>
          ) : (
            <Box>
              {(queryData?.allLinks || []).map((link) => {
                const shortenLink = `https://hdwy.link/${link.slug}`;
                return (
                  <Box
                    key={link.id}
                    sx={{ border: "1px solid grey", borderRadius: "5px" }}
                  >
                    <Grid container justifyContent="center" alignItems="center">
                      <Grid item md={5}>
                        <Box>
                          <Typography align="right">{link.url}</Typography>
                        </Box>
                      </Grid>
                      <Grid item md={2} align="center">
                        <Box
                          component="span"
                          sx={{ width: "50px", mx: 2 }}
                        >{`-->`}</Box>
                      </Grid>
                      <Grid item md={5}>
                        <Stack direction="row" alignItems="center">
                          <Typography>
                            <a href="/#">{shortenLink}</a>
                          </Typography>
                          <IconButton
                            sx={{ ml: 2 }}
                            aria-label="copy"
                            onClick={() => {
                              copy(shortenLink);
                            }}
                          >
                            <ContentCopyIcon />
                          </IconButton>
                        </Stack>
                      </Grid>
                    </Grid>
                  </Box>
                );
              })}
            </Box>
          )}
        </Box>
      </Container>
    </>
  );
};

export default Url;
