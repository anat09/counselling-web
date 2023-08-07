import React, { useEffect, useState } from "react";
import {
  Box,
  CardActionArea,
  CardContent,
  CircularProgress,
  Container,
  Paper,
  Typography
} from "@mui/material";
import {
  Entity,
  EntityCustomViewParams,
  EntityReference,
  EntityValues,
  ErrorView,
  Markdown,
  useDataSource,
  useStorageSource
} from "firecms";
import { BlogEntry } from "actions/blog";

/**
 * This is a sample view used to render the content of a blog entry.
 * It is bound to the data that is modified in the form.
 */
export function BlogEntryPreview({ modifiedValues }: EntityCustomViewParams<BlogEntry>) {

  const storage = useStorageSource();

  const [headerUrl, setHeaderUrl] = useState<string | undefined>();
  useEffect(() => {
    if (modifiedValues?.header_image) {
      storage.getDownloadURL(modifiedValues.header_image)
        .then((res) => setHeaderUrl(res.url));
    }
  }, [storage, modifiedValues?.header_image]);

  return (
    <Box>

      {headerUrl && <img
        alt={"Header"}
        style={{
          width: "100%",
          maxHeight: "300px",
          objectFit: "cover"
        }}
        src={headerUrl}
      />}

      <Container
        maxWidth={"md"}
        sx={{
          alignItems: "center",
          justifyItems: "center",
          display: "flex",
          flexDirection: "column"
        }}
      >
        {modifiedValues?.name && <Typography variant={"h3"} sx={{
          marginTop: "40px",
          marginBottom: "20px"
        }}>
          {modifiedValues.name}
        </Typography>}

        {modifiedValues?.content && modifiedValues.content
          .filter((e: any) => !!e)
          .map(
            (entry: any, index: number) => {
              if (entry.type === "text")
                return <Text key={`preview_text_${index}`} markdownText={entry.value}/>;
              if (entry.type === "images")
                return <Images key={`preview_images_${index}`} storagePaths={entry.value}/>;
              return <ErrorView key={`preview_images_${index}`} error={"Unexpected value in blog entry"}/>
            }
          )}
      </Container>

    </Box>
  );

}

export function Images({ storagePaths }: { storagePaths: string[] }) {
  if (!Array.isArray(storagePaths))
    return <></>;
  return <Box display="flex">
    {storagePaths.map((path, index) =>
      <Box p={2} m={1}
         key={`images_${index}`}
         sx={{
           width: 250,
           height: 250
         }}>
        <StorageImage storagePath={path}/>
      </Box>
    )}
  </Box>;
}

export function StorageImage({ storagePath }: { storagePath: string }) {

  const storage = useStorageSource();
  const [url, setUrl] = useState<string | undefined>();
  useEffect(() => {
    if (storagePath) {
      storage.getDownloadURL(storagePath)
        .then((res) => setUrl(res.url));
    }
  }, [storage, storagePath]);

  if (!storagePath)
    return <></>;

  return (<img
    alt={"Generic"}
    style={{
      objectFit: "contain",
      width: "100%",
      height: "100%"
    }} src={url}/>);
}

function Text({ markdownText }: { markdownText: string }) {

  if (!markdownText)
    return <></>;

  return <Container maxWidth={"sm"}>
    <Box mt={6} mb={6}>
      <Markdown source={markdownText}/>
    </Box>
  </Container>;
}