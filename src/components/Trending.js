import React from 'react';
import classes from './Trending.module.scss';
import { FcLike } from 'react-icons/fc';
import poster1 from '../assets/poster1.jpg';
import poster2 from '../assets/poster2.jpg';
import poster3 from '../assets/poster3.jpg';
import poster4 from '../assets/poster4.jpg';
import poster5 from '../assets/poster5.jpg';
import poster6 from '../assets/poster6.jpg';
import poster7 from '../assets/poster7.jpg';
import poster8 from '../assets/poster8.jpg';

const Trending = () => {
  return (
    <div className={classes.trending}>
      <div className={classes.trending__card}>
        <img src={poster1} className={classes.trending__card__poster}></img>
        <div className={classes.trending__card__info}>
          <h3 className={classes.trending__card__info__tittle}>AFTER</h3>
          <p className={classes.trending__card__info__desc}></p>
          <div className={classes.trending__card__info__tombol}>
            <button className={classes.trending__card__info__tombol__love}>
              <FcLike />
            </button>
            <button className={classes.trending__card__info__tombol__watch}>
              Watch
            </button>
          </div>
        </div>
      </div>
      <div className={classes.trending__card}>
        <img src={poster2} className={classes.trending__card__poster}></img>
        <div className={classes.trending__card__info}>
          <h3 className={classes.trending__card__info__tittle}>
            Story of Castlerock
          </h3>
          <p className={classes.trending__card__info__desc}></p>
          <div className={classes.trending__card__info__tombol}>
            <button className={classes.trending__card__info__tombol__love}>
              <FcLike />
            </button>
            <button className={classes.trending__card__info__tombol__watch}>
              Watch
            </button>
          </div>
        </div>
      </div>
      <div className={classes.trending__card}>
        <img src={poster3} className={classes.trending__card__poster}></img>
        <div className={classes.trending__card__info}>
          <h3 className={classes.trending__card__info__tittle}>FREEDOM</h3>
          <p className={classes.trending__card__info__desc}></p>
          <div className={classes.trending__card__info__tombol}>
            <button className={classes.trending__card__info__tombol__love}>
              <FcLike />
            </button>
            <button className={classes.trending__card__info__tombol__watch}>
              Watch
            </button>
          </div>
        </div>
      </div>
      <div className={classes.trending__card}>
        <img src={poster4} className={classes.trending__card__poster}></img>
        <div className={classes.trending__card__info}>
          <h3 className={classes.trending__card__info__tittle}>US</h3>
          <p className={classes.trending__card__info__desc}></p>
          <div className={classes.trending__card__info__tombol}>
            <button className={classes.trending__card__info__tombol__love}>
              <FcLike />
            </button>
            <button className={classes.trending__card__info__tombol__watch}>
              Watch
            </button>
          </div>
        </div>
      </div>
      <div className={classes.trending__card}>
        <img src={poster5} className={classes.trending__card__poster}></img>
        <div className={classes.trending__card__info}>
          <h3 className={classes.trending__card__info__tittle}>SAN ANDREAS</h3>
          <p className={classes.trending__card__info__desc}></p>
          <div className={classes.trending__card__info__tombol}>
            <button className={classes.trending__card__info__tombol__love}>
              <FcLike />
            </button>
            <button className={classes.trending__card__info__tombol__watch}>
              Watch
            </button>
          </div>
        </div>
      </div>
      <div className={classes.trending__card}>
        <img src={poster6} className={classes.trending__card__poster}></img>
        <div className={classes.trending__card__info}>
          <h3 className={classes.trending__card__info__tittle}>DUNE</h3>
          <p className={classes.trending__card__info__desc}></p>
          <div className={classes.trending__card__info__tombol}>
            <button className={classes.trending__card__info__tombol__love}>
              <FcLike />
            </button>
            <button className={classes.trending__card__info__tombol__watch}>
              Watch
            </button>
          </div>
        </div>
      </div>
      <div className={classes.trending__card}>
        <img src={poster7} className={classes.trending__card__poster}></img>
        <div className={classes.trending__card__info}>
          <h3 className={classes.trending__card__info__tittle}>REMEMORY</h3>
          <p className={classes.trending__card__info__desc}></p>
          <div className={classes.trending__card__info__tombol}>
            <button className={classes.trending__card__info__tombol__love}>
              <FcLike />
            </button>
            <button className={classes.trending__card__info__tombol__watch}>
              Watch
            </button>
          </div>
        </div>
      </div>
      <div className={classes.trending__card}>
        <img src={poster8} className={classes.trending__card__poster}></img>
        <div className={classes.trending__card__info}>
          <h3 className={classes.trending__card__info__tittle}>AQUAMAN</h3>
          <p className={classes.trending__card__info__desc}></p>
          <div className={classes.trending__card__info__tombol}>
            <button className={classes.trending__card__info__tombol__love}>
              <FcLike />
            </button>
            <button className={classes.trending__card__info__tombol__watch}>
              Watch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
