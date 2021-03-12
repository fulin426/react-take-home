import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LinkIcon from '@material-ui/icons/Link';
import GetAppIcon from '@material-ui/icons/GetApp';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

const useStyles = makeStyles(theme => ({
  wrapper: {
    overflowX: 'scroll',
  },
  thumbnailContainer: {
    position: 'relative',
    marginRight: 12,
    '&:last-child': {
      marginRight: 0,
    },
  },
  thumbnail: {
    width: 100,
    height: 180,
    borderRadius: 6,
  },
  iconContainer: {
    height: 48,
    width: 48,
    cursor: 'pointer',
  },
  icon: {
    height: 25,
    width: 25,
  },
  playIcon: {
    position: 'absolute',
    left: 36,
    top: 73,
    zIndex: 10,
    color: 'white',
  },
}));

function MediaList({ medias }) {
  const classes = useStyles();
  console.log(medias);

  const copyLink = (link) => {
    navigator.clipboard.writeText(link);
  }

  return (
    <Box className={classes.wrapper} padding={2} display='flex'>
      {medias.map(media =>
        <div key={media.cover_photo_url} className={classes.thumbnailContainer}>
          <img className={classes.thumbnail} src={media.cover_photo_url} />
          {media.media_type === 'video' && <PlayArrowIcon className={classes.playIcon} fontSize="large"/>}
          <Box display='flex'>
            <Box 
              display='flex' 
              alignItems='center' 
              justifyContent='center' 
              className={classes.iconContainer}
            >
              <LinkIcon onClick={() => copyLink(media.tracking_link)} className={classes.icon}/>
            </Box>
            <Box 
              display='flex' 
              alignItems='center' 
              justifyContent='center' 
              className={classes.iconContainer}
            >
            <a href={media.download_url} download>
              <GetAppIcon className={classes.icon} />
            </a>
            </Box>
          </Box>
        </div>
      )}
    </Box>
  );
}

export default MediaList;